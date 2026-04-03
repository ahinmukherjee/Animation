# Load clean data
df = pd.read_csv('cleaned_health_data.csv')

# 1. PM2.5 Risk Categories
df['PM25_risk'] = pd.cut(df['PM25'], bins=[0,50,100,200], 
                         labels=['Safe','Moderate','Dangerous'])

# 2. Temperature Extremes  
df['Temp_diff'] = df['MaxTempC'] - df['MinTempC']
df['Cold_weather'] = (df['MinTempC'] < 10).astype(int)

# 3. Altitude Risk Zones
df['High_altitude'] = (df['Altitude m'] > 1500).astype(int)

# 4. Age Risk Score
df['Age_risk'] = df['AgeGroup'].map({'Elderly':3, 'Adult':2, 'Child':1})

# 5. Combined Pollution-Altitude Risk
df['Pollution_altitude'] = df['PM25'] * df['High_altitude']

print(df[['PM25_risk', 'High_altitude', 'Age_risk']].head())



from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Prepare data
features = ['PM25', 'Altitude m', 'SymptomScore', 'High_altitude', 'Age_risk']
X = df[features]
y = df['RiskLevel'].map({'High':1, 'Medium':0, 'Low':0})  # Binary: High vs Not-High

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model 1: Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
rf_pred = rf.predict(X_test)
print(f"Random Forest Accuracy: {accuracy_score(y_test, rf_pred):.2f}")

# Model 2: Logistic Regression  
lr = LogisticRegression()
lr.fit(X_train, y_train)
lr_pred = lr.predict(X_test)
print(f"Logistic Accuracy: {accuracy_score(y_test, lr_pred):.2f}")

# Feature Importance
importances = pd.DataFrame({'feature':features, 'importance':rf.feature_importances_})
print("\nTop Features:")
print(importances.sort_values('importance', ascending=False))


from sklearn.model_selection import cross_val_score
from sklearn.metrics import confusion_matrix, classification_report

# Cross-validation
cv_scores = cross_val_score(rf, X, y, cv=5)
print(f"Cross-val accuracy: {cv_scores.mean():.2f} (+/- {cv_scores.std()*2:.2f})")

# Confusion Matrix
print("\nConfusion Matrix:")
print(confusion_matrix(y_test, rf_pred))
print("\nClassification Report:")
print(classification_report(y_test, rf_pred))




# 🚦 3D Traffic Signal Simulation using Core Java

![Java](https://img.shields.io/badge/Java-Core%20Java-orange)
![GUI](https://img.shields.io/badge/Swing-GUI-blue)
![Animation](https://img.shields.io/badge/Animation-Timer-green)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

A **3D Traffic Signal simulation built using Core Java Swing and AWT**.  
This project shows a realistic traffic light system with:

- 🔴 Red light → **30 sec**
- 🟡 Yellow light → **5 sec**
- 🟢 Green light → **25 sec**

The signal automatically changes with a **live countdown timer**, gradient body design, glow effects, and smooth UI rendering.

---

## ✨ Features
- 🚦 3D style traffic signal design
- 🎨 Gradient signal body
- 💡 Glow effect for active light
- ⏱️ Live countdown timer
- 🔄 Automatic light switching
- 🖥️ Java Swing GUI
- 🪄 Anti-aliasing smooth graphics
- 🎯 Beginner-friendly animation project

---

## 🛠️ Technologies Used
- Java
- Core Java
- Swing
- AWT
- Timer
- Graphics2D
- GradientPaint
- OOP Concepts

---

## 📂 Project Structure
```text
TrafficSignal/
│── TrafficSignal.java
│── screenshots/
│   └── output.png
│── README.md
```

---

## 🚦 Signal Flow Logic
```text
Red    → 30 sec
Yellow → 5 sec
Green  → 25 sec
Repeat...
```

---

## 📷 Output Preview
![Traffic Signal](screenshots/output.png)

> Add your program screenshot inside `screenshots/output.png`

---

## ▶️ How to Run
1. Clone repository
2. Open in Eclipse / IntelliJ
3. Run `TrafficSignal.java`
4. Enjoy the traffic signal simulation 🚦

---

## 💻 Core Timer Logic
```java
Timer timer = new Timer(1000, e -> {
    countdown--;

    if (countdown <= 0) {
        if (currentLight == 0) {
            currentLight = 1;
            countdown = 5;
        } else if (currentLight == 1) {
            currentLight = 2;
            countdown = 25;
        } else {
            currentLight = 0;
            countdown = 30;
        }
    }
    repaint();
});
```

---

## 🎯 Concepts Covered
- Java GUI Design
- Swing Components
- Animation using Timer
- Real-time countdown
- Graphics rendering
- Gradient effects
- OOP design

---

## 🚀 Future Improvements
- 🚗 Add moving vehicles
- 🌃 Add night mode
- 🚦 Add road crossing signal
- 🔊 Add traffic sound
- 🎮 User control buttons

---

