# 🎓 GWA-Wizard  
**Tired of crunching numbers to figure out your General Weighted Average (GWA)?**  
Fear not! GWA-Wizard is here to save the day. This handy Tampermonkey script automatically computes your GWA straight from your school portal, skipping over unreleased grades and doing all the heavy lifting for you. 🚀  

---

## ✨ Features  
- **Auto-GWA Calculator**: No more manual math—let the script do the work!  
- **Skip the Zeros**: Ignores subjects without grades or pending releases.  
- **Instant Results**: Displays your GWA right on the portal, no extra steps needed.  
- **Student-Friendly**: Designed with your time and sanity in mind.  

---

## 💡 Why GWA-Wizard?  
Manually calculating GWA is a pain:  
- Scrolling through rows of grades and units.  
- Worrying about missed decimal points.  
- Double-checking your work.  

Stop wasting time! Whether you're a procrastinating student (aren't we all?) or just someone who hates spreadsheets, GWA-Wizard has got you covered.  

---

### ‼️ Who can use GWA-Wizard?
- Only University of Mindanao Students
---

## 🚀 How It Works  
1. **Install Tampermonkey**:  
   - [Chrome Extension](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  

2. **Install GWA-Wizard**:  
   - Copy the script from this repository into a new Tampermonkey script.  

3. **Load Your UM School Portal**:  
   - Visit your UM portal, and let the script do its magic.  

4. **See Your GWA**:  
   - Look for the GWA display at the bottom-right corner of your screen.  

---

## 🛠️ Installation Steps  
1. Open your browser and install [Tampermonkey](https://www.tampermonkey.net/).  
2. Click the Tampermonkey icon in your toolbar and select "Create a new script."  
3. Replace the default template with the contents of the **`GWA-Wizard.user.js`** file from this repository.  
4. Save the script and reload your school portal.  

---

## 📊 Formula Used  
The script calculates your GWA using this formula:  
$$
\text{GWA} = \frac{\sum (\text{grade} \times \text{units})}{\sum \text{units}}
$$  
- Grades with a value of `0` are skipped.  
- Only valid numbers are considered.  

---

## 💬 Feedback  
Found a bug or have an idea to make GWA-Wizard even better? Open an issue or submit a pull request. Let’s make this script a lifesaver for students everywhere! 🧠✨  

---

## 🖤 Special Thanks  
To all the students who inspired this project and dream of a world with less math and more automation.  

---

## 📜 License  
This project is licensed under the [MIT License](LICENSE).  
