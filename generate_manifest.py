import os
import json
import re

# Directories to scan in order of presentation
CATEGORIES = {
    "bookkeeping": {
        "title": "Bookkeeping manual & computerised (5N1354)",
        "description": "10 learning outcomes covering double-entry bookkeeping, daybooks, ledgers, VAT returns, bank reconciliations, and computerised systems.",
        "icon": "book-open"
    },
    "payroll": {
        "title": "Payroll manual & computerised (5N1546)",
        "description": "10 learning outcomes covering tax bands, tax credits, cumulative tax systems, emergency tax, married assessment, USC, PRSI, and reporting.",
        "icon": "credit-card"
    },
    "exercises": {
        "title": "Practical Exercises",
        "description": "Worksheets for manual and computerised bookkeeping and payroll practice.",
        "icon": "file-edit"
    },
    "exercise-solutions": {
        "title": "Exercise Solutions",
        "description": "Step-by-step worked solutions for all bookkeeping and payroll worksheets.",
        "icon": "check-square"
    },
    "templates": {
        "title": "Blank Practice Templates",
        "description": "Interactive forms for practice: daybooks, ledgers, cash books, VAT returns, P30, and bank reconciliations.",
        "icon": "table"
    },
    "mock-projects": {
        "title": "Mock Projects & solutions",
        "description": "Timed mock QQI assessment projects for both modules, complete with model answers.",
        "icon": "award"
    },
    "software-guides": {
        "title": "Software Guides",
        "description": "Step-by-step guides for Sage 50 / QuickBooks and Thesaurus / Sage Payroll.",
        "icon": "cpu"
    },
    "reference": {
        "title": "Reference Materials",
        "description": "Complete glossary of 70+ terms and bookkeeping & payroll cheat sheets.",
        "icon": "info"
    },
    "assessment": {
        "title": "Assessment Preparation",
        "description": "Exam prep guides, marking schemes, and revision timelines to secure a Distinction.",
        "icon": "calendar"
    }
}

def extract_title(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("# "):
                    # Remove markdown header prefix and any markdown formatting
                    title = re.sub(r'[*_`#]', '', line[2:]).strip()
                    return title
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    # Fallback to file name if no title header found
    base = os.path.basename(file_path)
    name, _ = os.path.splitext(base)
    return name.replace("-", " ").title()

def main():
    manifest = {
        "courseTitle": "QQI Level 5 Bookkeeping & Payroll Course",
        "courseSub": "5N1354 & 5N1546 Dual Certification Program",
        "categories": {}
    }
    
    workspace_dir = os.path.dirname(os.path.abspath(__file__))
    
    for folder, info in CATEGORIES.items():
        folder_path = os.path.join(workspace_dir, folder)
        if not os.path.isdir(folder_path):
            print(f"Warning: Directory '{folder}' not found in workspace.")
            continue
            
        files_list = []
        for filename in sorted(os.listdir(folder_path)):
            if filename.endswith(".md"):
                file_path = os.path.join(folder_path, filename)
                title = extract_title(file_path)
                rel_path = f"{folder}/{filename}"
                files_list.append({
                    "filename": filename,
                    "path": rel_path,
                    "title": title
                })
        
        # Only add category if it contains markdown files
        if files_list:
            manifest["categories"][folder] = {
                "title": info["title"],
                "description": info["description"],
                "icon": info["icon"],
                "files": files_list
            }
            
    manifest_path = os.path.join(workspace_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        
    print(f"Success! Manifest generated with {sum(len(c['files']) for c in manifest['categories'].values())} files across {len(manifest['categories'])} categories.")

if __name__ == "__main__":
    main()
