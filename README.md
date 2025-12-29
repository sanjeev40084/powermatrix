# Power Platform Deployment Settings Generator

A lightweight, browser-based tool to generate `deployment-settings.json` files for Microsoft Power Platform pipelines. 

**[🔗 Live Demo](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)**

## 🎯 The Problem
When deploying Power Platform solutions via pipelines (Azure DevOps or GitHub Actions), managing Environment Variables and Connection References across multiple environments (QA, UAT, Prod) often requires manually editing error-prone JSON files.

## 🚀 The Solution
This tool provides a visual **Configuration Matrix** that allows you to:
1. Define your deployment stages (e.g., Dev, Test, Prod).
2. Input Environment Variables and Connection References in a grid view.
3. Automatically generate the correct JSON structure required by the Power Platform Build Tools.

## ✨ Features
* **Visual Matrix:** See all your environment values side-by-side.
* **JSON Preview:** Real-time preview of the generated code.
* **Bulk Export:** Download a combined JSON file for all stages at once.
* **Dark Mode:** toggle between light and dark themes.
* **Privacy First:** Runs entirely in your browser. No data is sent to any server.

## 🛠️ How to Use
1.  **Open the Tool:** Click the [Live Demo link](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/) above.
2.  **Define Stages:** Add your environments (e.g., `QA`, `UAT`, `PRD`) in the top control bar.
3.  **Add Variables:**
    * **Environment Variables:** Enter the *Schema Name* and the value for each stage.
    * **Connection References:** Enter the *Logical Name*, the Connection ID (GUID), and the Connector ID path.
4.  **Export:** * Use the dropdown to view JSON for a specific stage.
    * Click the **Copy** icon to paste it into your pipeline.
    * Select **ALL (Combined)** to download a full backup of your configuration.

## 📦 Installation / Local Use
Since this is a static HTML application, you don't need to install anything.

1.  Clone this repository.
2.  Open `index.html` in any web browser.

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
