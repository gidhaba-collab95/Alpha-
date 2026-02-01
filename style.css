:root {
    --bg-green: #76a543;
    --light-green: #a8d08d;
    --white: #ffffff;
}

body {
    margin: 0; font-family: 'Segoe UI', Tahoma, sans-serif;
    background-color: var(--bg-green); color: #000;
}

.container { max-width: 1000px; margin: 0 auto; padding: 20px; }

/* Навігація */
.main-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; }
.logo { background: var(--light-green); padding: 15px 35px; border-radius: 60px; font-weight: 900; font-size: 28px; cursor: pointer; text-align: center; }
.navigation { display: flex; gap: 10px; margin-top: 15px; }
.nav-btn { background: var(--light-green); border: none; padding: 12px 22px; border-radius: 25px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.nav-btn:hover { background: #94bc7a; transform: translateY(-2px); }

/* Секції та Анімація */
.content-section { animation: fadeIn 0.4s ease; }
.hidden { display: none; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.section-title { text-align: center; color: white; margin-bottom: 30px; font-size: 2rem; }

/* Картки та Списки */
.levels-grid, .grammar-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.level-card, .info-card { background: var(--light-green); padding: 25px; border-radius: 25px; transition: 0.3s; }
.level-card { text-align: center; cursor: pointer; }
.level-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.level-icon { font-size: 45px; margin-bottom: 10px; }

.example { background: rgba(255,255,255,0.4); padding: 8px; border-radius: 10px; font-style: italic; margin-top: 10px; }
.about-list { line-height: 2; margin-top: 15px; }

/* Квіз */
.modal { display: none; position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); }
.modal-content { background: white; margin: 5% auto; padding: 35px; width: 90%; max-width: 600px; border-radius: 35px; position: relative; text-align: center; }
.close { position: absolute; right: 25px; top: 15px; font-size: 35px; cursor: pointer; }
.progress-container { background: #eee; height: 12px; border-radius: 10px; flex-grow: 1; margin-right: 15px; overflow: hidden; }
#progress-fill { background: #58cc02; width: 0%; height: 100%; transition: 0.4s; }
.quiz-info { display: flex; align-items: center; margin-bottom: 25px; }

.options-grid { display: grid; gap: 12px; }
.option-btn { padding: 18px; border: 2px solid #ddd; border-radius: 18px; background: white; cursor: pointer; font-size: 1.1rem; transition: 0.2s; }
.option-btn:hover { border-color: var(--bg-green); }
.correct { background: #d7ffb8 !important; border-color: #58cc02 !important; }
.wrong { background: #ffdfe0 !important; border-color: #ff4b4b !important; }

/* Hero */
.hero-section { display: flex; align-items: center; gap: 30px; background: var(--light-green); padding: 30px; border-radius: 30px; }
.hero-section img { max-width: 300px; border-radius: 20px; }
.start-btn { background: var(--bg-green); color: white; border: none; padding: 15px 35px; border-radius: 25px; font-weight: bold; cursor: pointer; margin-top: 15px; font-size: 1.1rem; }

@media (max-width: 768px) {
    .main-header, .hero-section { flex-direction: column; text-align: center; }
    .hero-section img { max-width: 100%; }
}

