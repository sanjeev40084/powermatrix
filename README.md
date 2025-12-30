# PowerMatrix: Power Platform Deployment Settings Generator

A modern, secure, and accessible tool to generate `deployment-settings.json` files for Microsoft Power Platform pipelines. Built with **Tailwind CSS** and **Vanilla JS**, running entirely in the browser.

**[🔗 Live Demo](https://sanjeev40084.github.io/powermatrix/)**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web-orange.svg)
![Security](https://img.shields.io/badge/security-Audited-green.svg)

## 🎯 The Problem
Managing Application Lifecycle Management (ALM) for Power Platform requires manually creating complex JSON files to map Environment Variables and Connection References across environments (QA, UAT, Prod). This manual process is prone to syntax errors, GUID mismatches, and copy-paste fatigue.

## 🚀 The Solution
**PowerMatrix** provides a clean, visual grid interface that handles the JSON structure for you. It supports importing dev configurations, managing multiple stages, and validating GUIDs in real-time.

### ✨ Key Features

**Workflow & Productivity**
* **📄 Import Templates:** Upload a standard `deployment-settings.json` (exported via PAC CLI) to instantly populate your variable schema.
* **💾 Project State Management:** Save your "Work in Progress" to a local JSON file and reload it later.
* **⚡ Smart "Quick Fill":** Auto-suggests IDs for common connectors (SharePoint, Dataverse, Outlook, etc.).
* **🔃 Batch Export:** Download settings for a specific stage or trigger a batch download for **all stages** at once.
* **AZ Sorting:** Bi-directional sorting (Ascending/Descending) for variables to keep your matrix organized.

**User Experience (UX)**
* **🌗 Dark Mode:** Fully supported dark theme that respects system preferences.
* **📱 Responsive:** Dynamic layouts that work on desktop, tablets, and mobile.
* **📌 Sticky Headers:** Keep track of your environment columns while scrolling through long lists.
* **🛡️ Real-time Validation:** Visual cues (Red borders) immediately flag invalid GUIDs.

**Security & Privacy**
* **🔒 Client-Side Only:** No data is sent to any server. Everything runs locally in your browser.
* **🛡️ Secure:** Implements strict input sanitization (XSS protection) and safe DOM manipulation.
* **🆔 Secure IDs:** Uses `crypto.randomUUID()` for internal state management to prevent collisions.

**Accessibility (A11y)**
* **♿ Screen Reader Friendly:** Full ARIA label support, semantic table structures (`scope="col"`), and alert roles for notifications.
* **⌨️ Keyboard Navigation:** Optimized tab indexing and focus management.

## 🛠️ How to Use

1.  **Initialize:**
    * *Option A:* Click **Import Template** to load a `deployment-settings.json` file from your Dev environment.
    * *Option B:* Click **Load Project** to restore a previous PowerMatrix session.
    * *Option C:* Start fresh by adding stages (e.g., `QA`, `PRD`) manually.
2.  **Edit Data:**
    * **Environment Variables:** Enter the values for each specific environment.
    * **Connection References:** Select a connector type (or paste a custom ID) and provide the specific Connection GUID for each environment.
3.  **Review:** Use the **Sort A-Z** buttons to organize your list and check for red borders indicating invalid GUIDs.
4.  **Export:**
    * Select a specific stage to generate the JSON preview.
    * Click **Copy** to paste into Azure DevOps / GitHub Actions.
    * Click **📥 (Download)** for a single file or **📦 (Batch)** to download files for all environments.

## 📦 Installation
Since this is a static HTML application, no build process or package manager is required.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/sanjeev40084/powermatrix.git](https://github.com/sanjeev40084/powermatrix.git)
    ```
2.  Open `index.html` in any web browser.

## 🤝 Contributing
Contributions are welcome!
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License
Distributed under the MIT License.