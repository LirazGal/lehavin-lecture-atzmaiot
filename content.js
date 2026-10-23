/* =========================================================
   תוכן ההרצאה. כדי להכין הרצאה חדשה: מעתיקים את התיקייה
   ועורכים רק את הקובץ הזה.
   תמונות: שמים קובץ בתיקייה assets בשם שמופיע ב img.
   אם הקובץ חסר, תוצג מסגרת עם התיאור.
   ========================================================= */

const LECTURE = {
  title: 'לא צריך לפחד, צריך להבין',
  kicker: '3 מיומנויות לעידן ה AI',
  audience: 'העצמאיות של חיפה, קריות והסביבה',
  phone: '972545387466',
  phoneDisplay: '054-5387466',
  site: 'lehavinai.co.il',
  links: {
    netflix: 'https://www.netflix.com/watch/82772145',
    quiz: 'https://lirazgal.github.io/lehavin-quiz/',
    synthid: 'https://deepmind.google/models/synthid/',
    youtube: 'https://www.youtube.com/channel/UCv81fx_fjdWJpern4C2jyIA',
  },
  cta: [
    {
      title: 'ללמוד לעומק',
      text: 'מפגש עבודה אישי, אחד על אחד. מתחילים ממה שהכי בוער בעסק',
      wa: 'היי לירז, הייתי בהרצאה בעצמאיות ואשמח לשמוע על מפגש עבודה אישי',
    },
    {
      title: 'הרצאה כזו במקום נוסף',
      text: 'מכירים קבוצה או קהילה שתשמח לשמוע? אשמח לחיבור',
      wa: 'היי לירז, הייתי בהרצאה בעצמאיות ויש לי רעיון למקום שישמח להרצאה כזו',
    },
  ],
};

const SECTIONS = [
  /* ---------------- 1. פתיחה ---------------- */
  {
    id: 'open', color: 'rose', title: 'פתיחה', desc: 'נסיעה בלי נהג, מעלית בלי מפעיל, וסוס אחד עקשן',
    screens: [
      {
        title: 'נסיעה בלי נהג: כן או לא?',
        sub: 'לא מדע בדיוני. מונית בלי נהג, היום, ברחובות אמיתיים',
        html: `
        <div class="grid g-2-1">
          <a class="video" href="{{netflix}}" target="_blank" rel="noopener">
            <span class="play" aria-hidden="true"></span>
            <strong>לצפייה בקטע בנטפליקס</strong>
            <small>דקה 21:56 עד 24:58</small>
          </a>
          <div class="card">
            <h3 class="accent">ואחרי הנסיעה...</h3>
            <p class="lg">מי קובע לכמה תאונות אפשר להסכים?</p>
            <p class="lg">מי מחליט מהי רמת נזק מקובלת?</p>
          </div>
        </div>`,
      },
      {
        title: 'מעלית בלי מפעיל? על זה עולים?',
        html: `
        <div class="grid g-1-1">
          <div class="img" data-img="elevator.jpg">מפעיל מעלית במדים, שנות ה 20 או ה 30</div>
          <div>
            <div class="huge accent">1880</div>
            <ul class="years">
              <li><b>1880</b><span>ורנר פון סימנס מציג את המעלית החשמלית הראשונה</span></li>
              <li><b>1900+</b><span>כבר יש מעליות אוטומטיות, אבל הציבור מסרב לעלות בלי מפעיל אנושי</span></li>
              <li><b>1945</b><span>שביתת מפעילי המעליות משתקת את ניו יורק. רק אז מתחילה המהפכה</span></li>
            </ul>
            <div class="note">והיום? לחיצה על כפתור, בלי לחשוב פעמיים.</div>
          </div>
        </div>`,
      },
      {
        title: 'יש לי סוס נהדר',
        sub: '1908, מגרש מכוניות. פורד מודל T חדשה לגמרי',
        html: `
        <div class="grid g-1-1">
          <div class="img" data-img="horse.jpg">סוחר מציג פורד מודל T, ולידו לקוח עם סוס</div>
          <div class="stack">
            <div class="bubble">הסוחר: "תראה, מכונית! בלי אוכל, בלי אורווה."</div>
            <div class="bubble alt">הלקוח: "למה אני צריך? יש לי סוס נהדר."</div>
            <div class="xl accent">ומה הסוס שלנו?</div>
          </div>
        </div>`,
      },
      {
        title: '',
        html: `
        <div class="center">
          <p class="xl muted">הפחד לא נעלם כי הכריחו אותנו.</p>
          <p class="huge accent">הוא נעלם כי הכרנו.</p>
        </div>`,
      },
    ],
  },

  /* ---------------- 2. נעים להכיר ---------------- */
  {
    id: 'me', color: 'rose', title: 'נעים להכיר', desc: 'מי אני, ולמה אני חופרת על AI',
    screens: [
      {
        title: 'נעים להכיר',
        html: `
        <div class="grid g-1-1">
          <div class="slider" data-slider>
            <figure><img src="assets/me-trainer.jpg" alt="איור של לירז מחזיקה רובוט קטן בתוך כדור שלג"><figcaption>מעל 20 שנה מדריכת טכנולוגיות</figcaption></figure>
            <figure><img src="assets/me-facilitator.jpg" alt="לירז מנחה מול קבוצה"><figcaption>מתרגמת את הבאזז למילים פשוטות</figcaption></figure>
            <figure><img src="assets/costumes.png" alt="שתי תחפושות רובוט של לירז: אחת מ 1984 ואחת של ChatGPT מ 2023"><figcaption>מאז ומתמיד סקרנית לטכנולוגיה</figcaption></figure>
          </div>
          <div>
            <ul class="dots lg">
              <li>מעל 20 שנה מלמדת טכנולוגיה, בגובה העיניים</li>
              <li>הקמתי את להבין AI: הרצאות, סדנאות וליווי לעסקים</li>
              <li>עובדת יום יום עם צוות סוכנים דיגיטליים שהקמתי</li>
              <li>ויש לי ערוץ יוטיוב של שירים שיצרתי עם AI</li>
            </ul>
            <div class="me-links">
              <div class="yt"><div data-qr data-qr-url="{{youtube}}" data-qr-size="104"></div><a href="{{youtube}}" target="_blank" rel="noopener">לערוץ היוטיוב</a></div>
              <div><p class="lg accent strong">טכנולוגיה בשירות האדם</p><a class="site" href="https://lehavinai.co.il" target="_blank" rel="noopener"><bdi dir="ltr">LehavinAI.co.il</bdi></a></div>
            </div>
          </div>
        </div>`,
      },
    ],
  },

  /* ---------------- 3. חידון ---------------- */
  {
    id: 'quiz', color: 'rose', title: 'משחק', desc: 'עד כמה אנחנו ו AI חברים?',
    screens: [
      {
        title: 'נגלה יחד: עד כמה אנחנו ו AI חברים',
        sub: 'סריקת הברקוד מהטלפון, ומתחילים',
        html: `
        <div class="center">
          <a class="btn big" href="https://lirazgal.github.io/lehavin-quiz/?role=host&key=u7dc8dk6hh" target="_blank" rel="noopener">פתיחת מסך המנחה</a>
          <p class="muted mt">הברקוד להצטרפות מופיע על מסך המנחה</p>
          <a class="small-link" href="{{quiz}}" target="_blank" rel="noopener">כניסה למשחק מהטלפון</a>
        </div>`,
      },
    ],
  },

  /* ---------------- 4. איך הגענו לכאן ---------------- */
  {
    id: 'history', color: 'lav', title: 'איך הגענו לכאן?', desc: 'משנות ה 50 ועד שנת הסוכנים',
    screens: [
      {
        title: 'משנות ה 50 עד שנות ה 90',
        sub: 'מהשאלה "מכונה יכולה לחשוב?" ועד מכונה שמנצחת אלוף עולם',
        html: `
        <ol class="decades">
          <li>
            <span class="era-dot">50</span>
            <h3>נולד רעיון</h3>
            <ul>
              <li><b>1950</b><span>מבחן טיורינג: מכונה יכולה לחשוב? <i>אלן טיורינג</i></span></li>
              <li><b>1952</b><span>תוכנה שלומדת לשחק דמקה <i>ארתור סמואל</i></span></li>
              <li><b>1956</b><span>נטבע המונח Artificial Intelligence <i>ג'ון מקארתי</i></span></li>
            </ul>
          </li>
          <li>
            <span class="era-dot">70-80</span>
            <h3>לומד לדבר ולראות</h3>
            <ul>
              <li><b>1970</b><span>מזיז קוביות לפי פקודות באנגלית <i>SHRDLU</i></span></li>
              <li><b>1982</b><span>יפן משיקה פרויקט ענק למחשבים חכמים</span></li>
              <li><b>1989</b><span>רשת עצבית מזהה כתב יד <i>יאן לקון</i></span></li>
            </ul>
          </li>
          <li>
            <span class="era-dot">90</span>
            <h3>המכונה מנצחת</h3>
            <ul>
              <li><b>1994</b><span>Chinook מנצחת את אלוף העולם בדמקה</span></li>
              <li><b>1997</b><span>Deep Blue מנצח את קספרוב בשחמט</span></li>
            </ul>
          </li>
        </ol>
        <div class="note center mt">השלב הראשון: מערכת שיודעת לבצע משימה אחת, טוב יותר מכל אדם</div>`,
      },
      {
        title: 'שנות ה 2000: המחשב לומד לבד',
        sub: '2012: הניסוי של גוגל, מה זה חתול?',
        html: `
        <div class="grid g-1-1">
          <div class="stack">
            <div class="img" data-img="cat.jpg" data-fit="contain" style="min-height:230px">חתול מול מחשב: What is a cat?</div>
            <div class="facts3">
              <div><b>16,000</b><span>מעבדים</span></div>
              <div><b>מיליארד</b><span>חיבורים ברשת</span></div>
              <div><b>10 מיליון</b><span>תמונות מיוטיוב</span></div>
            </div>
          </div>
          <div class="stack">
            <p class="small-p"><b>מי:</b> צוות מגוגל, עם החוקרים אנדרו נג וג'ף דין.</p>
            <ol class="steps small">
              <li><strong>מראים לרשת 10 מיליון תמונות מסרטונים אקראיים ביוטיוב</strong></li>
              <li><strong>בלי שום הסבר. אף תמונה לא מסומנת "חתול"</strong></li>
              <li><strong>אחרי 3 ימים, החוקרים מצאו ברשת "נוירון" אחד שמגיב לפרצופים של חתולים</strong></li>
            </ol>
            <div class="note">מה שמדהים: אף אחד לא כתב לה חוקים מה זה חתול. הרשת בנתה לעצמה את "המתכון", בתוך מיליארד חיבורים. מתכון שאף אדם לא היה מצליח לכתוב ביד.</div>
          </div>
        </div>`,
      },
      {
        title: '2017: ה Transformer',
        sub: 'חוקרים מגוגל פרסמו מאמר בשם "Attention Is All You Need", ובו הציגו דרך חדשה לבנות מודל שפה. כמעט כל כלי ה AI שאנחנו מכירים היום בנוי עליה.',
        html: `
        <div class="grid g-1-1">
          <div class="card top-lav"><h3>לפני</h3><p>מודלים קודמים קראו טקסט כמו שקוראים בקול: מילה אחרי מילה, לפי הסדר. עד שהגיעו לסוף משפט ארוך, הם כבר "שכחו" את ההתחלה. ולכן גם למדו לאט מאוד.</p></div>
          <div class="card top-rose"><h3>אחרי</h3><p>ה Transformer קורא את כל המשפט בבת אחת, ובודק איך כל מילה קשורה לכל מילה אחרת. לזה קוראים <b>"תשומת לב"</b>, באנגלית Attention.</p></div>
        </div>
        <div class="ctx small mt">
          <p><span>הכלב לא נכנס לבית כי <mark>הוא</mark> היה עייף.</span><span class="who">← הכלב</span></p>
          <p><span>הכלב לא נכנס לבית כי <mark>הוא</mark> היה נעול.</span><span class="who">← הבית</span></p>
        </div>
        <p class="lg center mt strong" style="margin-bottom:0">וה T ב ChatGPT? זה Transformer.</p>`,
      },
      {
        title: 'ארבעה תחומים בוערים',
        sub: 'מתפתחים בקצב מטורף, וביחד הם מה שמאפשר ל AI ללמוד',
        html: `
        <div class="grid g-4">
          <div class="card top-rose"><h3>זיהוי תבניות</h3><p>מוצא חוקיות בתוך ים של מידע</p></div>
          <div class="card top-lav"><h3>עיבוד שפה טבעית</h3><p>מבין וכותב שפה אנושית.</p><p class="muted" style="font-size:.85em">NLP: Natural Language Processing. לא ה NLP מעולם הפסיכולוגיה</p></div>
          <div class="card top-turq"><h3>למידת מכונה</h3><p>לומד מדוגמאות, לא מהוראות. באנגלית: Machine Learning</p></div>
          <div class="card top-mauve"><h3>עיבוד תמונה</h3><p>רואה, מזהה ומבין תמונות</p></div>
        </div>`,
      },
      {
        title: 'ומשם, הכל קרה מהר',
        html: `
        <div class="leap">
          <div class="leap-box">
            <span class="leap-date">נובמבר 2022</span>
            <h3>ChatGPT יוצא לעולם</h3>
            <p>AI שמדברים איתו בשפה רגילה. 100 מיליון משתמשים בחודשיים.</p>
          </div>
          <div class="leap-mid">
            <div class="leap-cloud"><span style="--r:-6deg">Claude</span><span style="--r:4deg">Gemini</span><span style="--r:-3deg">Copilot</span><span style="--r:7deg">Midjourney</span><span style="--r:-5deg">Perplexity</span><span style="--r:3deg">NotebookLM</span><span style="--r:-8deg">Sora</span><span style="--r:5deg">Suno</span><span style="--r:-2deg">Canva AI</span><span style="--r:6deg">Lovable</span><span style="--r:-4deg">DeepSeek</span><span style="--r:8deg">Llama</span></div>
            <div class="leap-arrow" aria-hidden="true"></div>
            <p class="hand leap-note">ובאמצע? מאות כלים חדשים</p>
          </div>
          <div class="leap-box hot">
            <span class="leap-date">2026</span>
            <h3>שנת "הסוכנים לכולם"!</h3>
            <p>AI שלא רק עונה, אלא עושה: שולח, מסדר, בודק ומזכיר.</p>
          </div>
        </div>`,
      },
      {
        title: 'משחק: הסדר הנכון של המשפט',
        sub: 'לחיצה על המילים לפי הסדר הנכון. השעון מתחיל בלחיצה הראשונה',
        html: `<div data-wordgame></div>`,
      },
      {
        title: 'השפה של AI',
        sub: 'גוררים כל הגדרה אל המושג שלה. אפשר גם ללחוץ על הגדרה ואז על המושג',
        html: `<div data-match></div>`,
      },
    ],
  },

  /* ---------------- 5. מיומנות 1 ---------------- */
  {
    id: 'tools', color: 'turq', title: 'מיומנות 1', desc: '',
    screens: [
      {
        title: '3 מיומנויות חשובות בתקופה הזאת',
        html: `
        <div class="grid g-3 flips">
          <div class="flip f-turq" data-reveal tabindex="0" role="button" aria-label="מיומנות 1">
            <div class="in">
              <div class="front"><span class="big">1</span><span class="hand tap">לחיצה לגילוי</span></div>
              <div class="back"><div class="num turq">1</div><h3>ללמוד את הכלים</h3><span class="ul"></span><p>מה הכלי עושה, איך עובדים איתו נכון, והאם הוא מתאים לצרכים שלי?</p></div>
            </div>
          </div>
          <div class="flip f-lav" data-reveal tabindex="0" role="button" aria-label="מיומנות 2">
            <div class="in">
              <div class="front"><span class="big">2</span><span class="hand tap">לחיצה לגילוי</span></div>
              <div class="back"><div class="num lav">2</div><h3>לחפש את האמת</h3><span class="ul"></span><p>לא מתעצלים לבדוק את התשובות והתוצרים שלו</p></div>
            </div>
          </div>
          <div class="flip f-rose" data-reveal tabindex="0" role="button" aria-label="מיומנות 3">
            <div class="in">
              <div class="front"><span class="big">3</span><span class="hand tap">לחיצה לגילוי</span></div>
              <div class="back"><div class="num rose">3</div><h3>לחזק את הקשר האנושי</h3><span class="ul"></span><p>שום מכונה לא תחליף יד מושטת, חיבוק ומבט בעיניים</p></div>
            </div>
          </div>
        </div>`,
      },
      {
        title: 'איך כותבים פרומפט איכותי? לחשוב חכ"ם',
        html: `
        <div class="grid g-3">
          <div class="card center"><div class="letter">ח</div><h3>חשיפה</h3><p>כל מה שהבוט צריך לדעת כדי להבין את התמונה: רקע, קהל יעד, מה כבר נעשה, מה נוסה ולא עבד.</p></div>
          <div class="card center"><div class="letter">כ</div><h3>כיוון</h3><p>איזה וייב מחפשים? רציני, הומוריסטי, נוסטלגי? כמו במאי שנותן הוראות לשחקנים בסצנה.</p></div>
          <div class="card center"><div class="letter">ם</div><h3>מטרה מהממת</h3><p>לאן רוצים להגיע, ומה יגרום לנו להגיד "וואו!" כשהתשובה תגיע.</p></div>
        </div>`,
      },
      {
        title: 'מצ\'אטבוט לסוכן',
        sub: 'מי שעונה, לעומת מי שעושה',
        html: `
        <div class="tablewrap"><table>
          <thead><tr><th>מאפיין</th><th>צ'אטבוט, Chatbot</th><th class="hl">סוכן AI, Agent</th></tr></thead>
          <tbody>
            <tr><th>עצמאות</th><td>מגיב: עונה רק כשפונים אליו</td><td class="hl">יוזם: מזהה מצבים ופועל בעצמו</td></tr>
            <tr><th>תכנון</th><td>מוגבל: צריך לקבל את הצעדים מבחוץ</td><td class="hl">גבוה: מתכנן צעדים קדימה</td></tr>
            <tr><th>שימוש בכלים</th><td>מוגבל או בכלל לא</td><td class="hl">מחובר למייל, יומן, קבצים ואוטומציות</td></tr>
            <tr><th>זיכרון</th><td>בדרך כלל שוכח בסוף השיחה</td><td class="hl">זוכר, לומד ומשתפר לאורך זמן</td></tr>
          </tbody>
        </table></div>`,
      },
      {
        title: 'חזרה ל Waymo: אותו סולם, לסוכנים',
        sub: 'סולם SAE: 6 רמות אוטונומיה. Waymo נוסעת ברמה 4',
        html: `
        <ol class="ladder">
          <li><b>רמה 0</b><strong>המגיב</strong><span>עונה לפרומפט, בתוך כלי אחד. למשל: שיחה עם ChatGPT</span></li>
          <li><b>רמה 1</b><strong>החושב</strong><span>עדיין עונה, אבל עם יכולת חשיבה. למשל: Deep Research</span></li>
          <li><b>רמה 2</b><strong>הפועל</strong><span>יוצא לכלים חיצוניים ומקבל החלטות לפי כללים</span></li>
          <li><b>רמה 3</b><strong>היוזם</strong><span>מזהה מתי לפעול ומציע, והאדם מאשר: Human in the loop</span></li>
          <li class="waymo"><b>רמה 4</b><strong>העצמאי</strong><span>מכיר לעומק ומחליט כמעט הכול. האדם רק מפקח</span><em>Waymo</em></li>
          <li><b>רמה 5</b><strong>AGI</strong><span>סוכן על: בינה כללית, לא מוגבלת לתחום</span></li>
        </ol>`,
      },
      {
        title: 'מי עושה מה? הכלים שכדאי להכיר',
        html: `
        <div class="grid g-2">
          <div class="card side-turq"><h3>ChatGPT</h3><p>השיחה הכללית: כתיבה, רעיונות, תמונות</p></div>
          <div class="card side-rose"><h3>Claude</h3><p>כתיבה איכותית, עבודה עם קבצים ובניית סוכנים</p></div>
          <div class="card side-lav"><h3>Gemini</h3><p>משולב בעולם של גוגל: מייל, דרייב, מצגות</p></div>
          <div class="card side-mauve"><h3>NotebookLM</h3><p>לומד רק מהמקורות שמעלים אליו: סיכום, שאלות ופודקאסט</p></div>
        </div>`,
      },
      {
        title: 'AI או אוטומציה?',
        sub: 'כלל אצבע: אם אפשר לכתוב את זה כ"אם... אז...", זו אוטומציה',
        html: `
        <div class="grid g-3">
          <div class="card head-lav"><h3>אוטומציה</h3><p class="strong">כללים קבועים, אותו דבר כל פעם</p><p class="muted">דוגמה: שולמה חשבונית? נשלחת קבלה ותודה</p></div>
          <div class="card head-rose"><h3>AI</h3><p class="strong">שיקול דעת, שפה, כל פעם משהו אחר</p><p class="muted">דוגמה: מייל נכנס? סיכום וטיוטת תשובה</p></div>
          <div class="card head-turq"><h3>ביחד</h3><p class="strong">האוטומציה מפעילה, ה AI חושב</p><p class="muted">דוגמה: פנייה חדשה נכנסת, AI מסווג, אוטומציה מעדכנת יומן</p></div>
        </div>`,
      },
      {
        title: 'ככה זה נראה אצלי: הצוות הדיגיטלי',
        sub: 'כן, יש להם שמות. וכן, אני מדברת איתם',
        html: `
        <div class="grid g-2-1">
          <div class="stack">
            <div class="agent"><b>לינדה</b><span>משאבי אנוש: בונה את הסוכנים החדשים</span></div>
            <div class="agent"><b>אמנון</b><span>איש הכספים: הצעות מחיר, הכנסות והוצאות</span></div>
            <div class="agent"><b>ג'ים</b><span>מנהל המייל: שומר על תיבת דואר נקייה</span></div>
            <div class="agent"><b>טום</b><span>מעצב מוצרים דיגיטליים</span></div>
          </div>
          <div class="card soft-lav center">
            <h3>Obsidian</h3>
            <p class="strong">המוח המשותף</p>
            <p>מחברת של קבצי טקסט פשוטים. כל הסוכנים קוראים ממנה וכותבים אליה, וככה הם זוכרים, ומכירים אותי ואחד את השני.</p>
          </div>
        </div>`,
      },
    ],
  },

  /* ---------------- 6. מיומנות 2 ---------------- */
  {
    id: 'truth', color: 'lav', title: 'מיומנות 2', desc: '',
    screens: [
      {
        title: 'הזיה: תשובה בטוחה בעצמה ושגויה',
        sub: 'AI לא "משקר". הוא משלים את המשפט הכי סביר, גם כשאין לו מידע',
        html: `
        <ol class="steps">
          <li><strong>חיפוש מקורות</strong><span>ולחיצה על הקישור. מקור שלא נפתח הוא סימן אזהרה</span></li>
          <li><strong>בדיקת שמות, מספרים ותאריכים</strong><span>שם הכי קל להמציא, ושם הכי יקר לטעות</span></li>
          <li><strong>שאלה ישירה: "במה אתה לא בטוח?"</strong><span>הוא יודע להודות, אם רק שואלים</span></li>
        </ol>`,
      },
      {
        title: 'נוצר ב AI? אפשר לבדוק',
        sub: 'SynthID של Google DeepMind: סימן מים בלתי נראה בתוכן שנוצר ב AI',
        html: `
        <div class="grid g-1-1">
          <div class="img" data-img="synthid.png">צילום מסך: בדיקת תמונה ב Gemini</div>
          <div class="stack">
            <ol class="steps small">
              <li><strong>העלאת התמונה, הסרטון או קטע האודיו ל Gemini</strong></li>
              <li><strong>שאלה: "האם זה נוצר או נערך בעזרת AI של גוגל?"</strong></li>
              <li><strong>Gemini בודק אם יש סימן מים ומחזיר תשובה</strong></li>
            </ol>
            <div class="note">חשוב לדעת: "לא נמצא סימן" לא אומר שהתמונה אמיתית</div>
            <a class="btn" href="{{synthid}}" target="_blank" rel="noopener">עוד על SynthID</a>
          </div>
        </div>`,
      },
    ],
  },

  /* ---------------- 7. מיומנות 3 ---------------- */
  {
    id: 'human', color: 'rose', title: 'מיומנות 3', desc: '',
    screens: [
      {
        title: 'יש דברים ש AI לא יודע לעשות',
        sub: 'יש לי צוות סוכנים שעובד איתי כל יום. אף אחד מהם לא ישב איתי לקפה',
        html: `
        <div class="grid g-3">
          <div class="card center"><h3>להחזיק יד</h3></div>
          <div class="card center"><h3>לחייך מול העיניים</h3></div>
          <div class="card center"><h3>ליצור אמפתיה אמיתית בין אנשים</h3></div>
        </div>
        <p class="lg muted center mt">AI יודע לכתוב "אני מבין אותך". הוא לא יודע להיות שם.</p>`,
      },
      {
        title: '',
        html: `
        <div class="center">
          <p class="huge accent">את זה אף מכונה לא תעשה בשבילנו.</p>
          <p class="xl muted">וזו המיומנות ששווה לחזק הכי הרבה.</p>
        </div>`,
      },
    ],
  },

  /* ---------------- 8. סיום ---------------- */
  {
    id: 'end', color: 'rose', title: 'סיום והצעד הבא', desc: 'איך ממשיכים מכאן',
    screens: [
      {
        title: '',
        html: `
        <div class="center">
          <p class="xl muted">לא צריך לאהוב את זה. לא צריך לפחד מזה.</p>
          <p class="huge accent">מספיק להבין את זה.</p>
        </div>
        <div data-cta class="mt"></div>
        <div class="closing-qr"><div data-qr></div><p class="muted">הדף הזה, עם כל החומרים והמשחקים</p></div>`,
      },
    ],
  },

];

/* המשפט של משחק המשפט: בדיוק 20 מילים */
/* משחק ההתאמה: מושג והגדרה */
const TERMS = [
  ['LLM', 'מודל שפה גדול: המוח שמאחורי הצ\'אט, שלמד מכמויות עצומות של טקסט'],
  ['פרומפט', 'ההוראה או השאלה שכותבים ל AI'],
  ['הזיה', 'תשובה שנשמעת בטוחה מאוד, אבל פשוט לא נכונה'],
  ['סוכן AI', 'AI שלא רק עונה, אלא יוצא לבצע משימות בעצמו'],
  ['סקיל', 'חבילת הוראות קבועה שמלמדת את ה AI לבצע משימה מסוימת, כל פעם באותה דרך'],
  ['פלאגין', 'תוסף שמוסיף ל AI יכולות חדשות, כמו אפליקציה בטלפון'],
  ['חיבור MCP', 'שקע אוניברסלי שמחבר את ה AI לכלים שלנו: מייל, יומן, קבצים'],
  ['אוטומציה', 'תהליך שרץ לבד לפי כללים קבועים: אם קרה X, קורה Y'],
];

const SENTENCE = 'בינה מלאכותית לומדת מתוך מיליוני דוגמאות, מזהה תבניות בשפה ובתמונות, ולכן היא יודעת לנחש מה הכי סביר שיבוא אחר כך';
