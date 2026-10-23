"""
Script to extract, clean, deduplicate, and sort email addresses from Google Contacts CSV.
"""

import os
import sys
import re
import csv
from pathlib import Path

def find_target_csv(workspace_dir: Path) -> Path:
    # 1. Check if specific file provided via command line arguments
    if len(sys.argv) > 1:
        custom_path = Path(sys.argv[1])
        if custom_path.is_file():
            return custom_path
        print(f"Warning: Specified file '{sys.argv[1]}' not found. Searching directory...")

    # 2. Prefer contacts.csv if present
    default_file = workspace_dir / "contacts.csv"
    if default_file.is_file():
        return default_file

    # 3. Otherwise detect any other CSV file in workspace (excluding output file)
    csv_candidates = [
        f for f in workspace_dir.glob("*.csv")
        if f.name.lower() != "clean_emails.csv"
    ]

    if csv_candidates:
        return csv_candidates[0]

    raise FileNotFoundError("Workspace me koi valid input CSV file nahi mili!")

def read_file_content(file_path: Path) -> str:
    # Attempt reading with common encodings
    for encoding in ("utf-8", "utf-8-sig", "latin-1", "cp1252"):
        try:
            with open(file_path, "r", encoding=encoding) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    # Fallback with errors='ignore'
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()

def main():
    workspace_dir = Path(__file__).resolve().parent

    try:
        input_csv = find_target_csv(workspace_dir)
    except FileNotFoundError as err:
        print(f"[Error] {err}")
        sys.exit(1)

    print("=" * 60)
    print(f" Detected Input File : {input_csv.name}")
    print(f" File Path           : {input_csv}")
    print("=" * 60)

    # Read file content
    content = read_file_content(input_csv)

    # Robust Email Regex Pattern
    email_pattern = re.compile(
        r'\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b'
    )

    # Extract all email addresses
    raw_matches = email_pattern.findall(content)
    total_raw_count = len(raw_matches)

    # Lowercase, deduplicate, and sort alphabetically
    unique_emails = sorted(list({email.strip().lower() for email in raw_matches if email.strip()}))
    unique_count = len(unique_emails)

    # Output file path (single CSV formatted for Resend)
    csv_output_path = workspace_dir / "clean_emails.csv"
    txt_old_path = workspace_dir / "clean_emails.txt"

    # Clean up old txt file if it exists
    if txt_old_path.exists():
        txt_old_path.unlink()

    # Save to clean_emails.csv (Resend compatible with 'email' header)
    with open(csv_output_path, "w", newline="", encoding="utf-8") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["email"])
        for email in unique_emails:
            writer.writerow([email])

    # Display results in terminal
    print("\nExtraction Summary (Resend Ready):")
    print("-" * 60)
    print(f" Total Raw Email Matches Found : {total_raw_count}")
    print(f" Duplicates Removed            : {total_raw_count - unique_count}")
    print(f" Total Unique Cleaned Emails   : {unique_count}")
    print("-" * 60)
    print(f" [Resend CSV File] : {csv_output_path.name}")
    print(f" [Full Path]       : {csv_output_path}")
    print("=" * 60)

if __name__ == "__main__":
    main()
