# Power Platform Deployment Settings Generator

A modern, secure, and responsive tool to generate `deployment-settings.json` files for Microsoft Power Platform pipelines. Built with **Tailwind CSS** and **Vanilla JS**.

**[🔗 Live Demo](https://sanjeev40084.github.io/powermatrix/)**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web-orange.svg)

## 🎯 The Problem
Managing ALM for Power Platform often requires manually editing complex JSON files to map Environment Variables and Connection References across different environments (QA, UAT, Prod). This process is prone to syntax errors and GUID mismatches.

## 🚀 The Solution
**PowerMatrix** provides a clean, visual grid interface that handles the JSON structure for you. 

### Key Features
* **✨ Smart "Quick Fill":** Auto-suggests IDs for common connectors (SharePoint, Dataverse, Outlook, etc.) so you don't have to look them up.
* **🔒 Secure & Private:** Runs 100% in your browser. No data is ever sent to a server.
* **💾 Auto-Save:** Your work is saved to your browser's Local Storage instantly. Close the tab and come back later without losing data.
* **🌗 Dark Mode:** Fully supported dark theme that respects system preferences.
* **📱 Responsive Design:** Works on desktop, tablets, and mobile devices.
* **⚡ High Performance:** Uses debouncing and sticky headers for managing large configuration matrices smoothly.

## 🛠️ How to Use

1.  **Define Stages:** Add your deployment stages (e.g., `QA`, `UAT`, `PRD`) at the top. The tool automatically handles capitalization.
2.  **Environment Variables:** * Enter the *Schema Name* (e.g., `cr56_site_url`).
    * Enter the specific value for each environment.
3.  **Connection References:**
    * **Logical Name:** Enter the reference name from your solution (e.g., `cr56_shared_sharepoint`).
    * **Connector ID:** Select a standard connector from the dropdown list or paste a custom path. *This applies to all environments.*
    * **Connection ID (GUID):** Enter the specific Connection GUID for each environment.
4.  **Export:** * Select a specific stage to generate the JSON for that pipeline run.
    * Select **ALL (Combined)** to backup your full configuration.
    * Click **Copy** to paste directly into Azure DevOps or GitHub Actions.

## 📦 Local Installation
Since this is a static HTML application, no build process is required.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/sanjeev40084/powermatrix.git](https://github.com/sanjeev40084/powermatrix.git)
    ```
2.  Open `index.html` in any web browser.

## 🛡️ Security Note
This tool uses `textContent` binding and explicitly sanitizes all user inputs to prevent XSS (Cross-Site Scripting). It utilizes Tailwind CSS via CDN for styling.

## 🤝 Contributing
Contributions are welcome!
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
