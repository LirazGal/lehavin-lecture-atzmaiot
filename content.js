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
    terms: 'https://ai-terms-match-he.lovable.app/',
    synthid: 'https://deepmind.google/models/synthid/',
  },
  cta: [
    {
      title: 'ללמוד לעומק',
      text: 'מפגש עבודה אישי, אחד על אחד, על מה שהכי רלוונטי לעסק',
      wa: 'היי לירז, הייתי בהרצאה בעצמאיות ואשמח לשמוע על מפגש עבודה אישי',
    },
    {
      title: 'הרצאה כזו במקום נוסף',
      text: 'קבוצה, ארגון או קהילה שישמחו לשמוע? אשמח לחיבור',
      wa: 'היי לירז, הייתי בהרצאה בעצמאיות ויש לי רעיון למקום שישמח להרצאה כזו',
    },
  ],
};

const SECTIONS = [
  /* ---------------- 1. פתיחה ---------------- */
  {
    id: 'open', color: 'rose', title: 'פתיחה', desc: 'Waymo, המעלית והסוס',
    screens: [
      {
        title: 'נסיעה בלי נהג: כן או לא?',
        sub: 'מונית אוטונומית, היום, ברחובות אמיתיים',
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
    id: 'me', color: 'rose', title: 'נעים להכיר', desc: 'מי אני ולמה AI',
    screens: [
      {
        title: 'נעים להכיר',
        html: `
        <div class="grid g-3-2">
          <figure class="photo">
            <img src="assets/costumes.png" alt="שתי תחפושות רובוט של לירז: אחת מ 1984 ואחת של ChatGPT מ 2023">
            <figcaption>מאז ומתמיד סקרנית לטכנולוגיה</figcaption>
          </figure>
          <div>
            <ul class="dots lg">
              <li>מעל 20 שנה בהדרכה טכנולוגית, הטמעת SAP וניהול שינוי בארגונים גלובליים</li>
              <li>מייסדת להבין AI: הרצאות, סדנאות וליווי עסקים</li>
              <li>עצמאית, עם צוות של סוכנים דיגיטליים שעובדים איתי כל יום</li>
            </ul>
            <p class="lg accent strong">טכנולוגיה בשירות האדם</p>
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
          <a class="btn big" href="{{quiz}}" target="_blank" rel="noopener">לכניסה למשחק</a>
          <p class="muted">הברקוד מופיע על מסך המשחק</p>
        </div>`,
      },
    ],
  },

  /* ---------------- 4. איך הגענו לכאן ---------------- */
  {
    id: 'history', color: 'lav', title: 'איך הגענו לכאן?', desc: 'ציר הזמן, החתול של גוגל ומשחק המשפט',
    screens: [
      {
        title: 'איך הגענו לכאן?',
        sub: 'בינה מלאכותית: מחשב שלומד מדוגמאות במקום לקבל הוראות צעד אחר צעד',
        html: `
        <ol class="timeline">
          <li><b>1956</b><span>נולד המונח "בינה מלאכותית"</span></li>
          <li><b>1997</b><span>Deep Blue מנצח את קספרוב בשחמט</span></li>
          <li class="hot"><b>2012</b><span>הניסוי של גוגל: מה זה חתול?</span></li>
          <li><b>2017</b><span>ה Transformer: המנוע של היום</span></li>
          <li><b>2022</b><span>ChatGPT: AI לכל אחד ואחת</span></li>
          <li class="now"><b>2026</b><span>סוכנים: AI שעושה, לא רק עונה</span></li>
        </ol>`,
      },
      {
        title: '2012: הניסוי של גוגל, מה זה חתול?',
        sub: 'מחשב שגילה לבד מה זה חתול',
        html: `
        <div class="grid g-1-1">
          <div class="img" data-img="cat.jpg" data-fit="contain">"פרצוף החתול" שהרשת של גוגל יצרה בעצמה</div>
          <div class="stack">
            <div class="fact"><b>16,000</b><span>מעבדי מחשב עבדו יחד</span></div>
            <div class="fact"><b>10 מיליון</b><span>תמונות מסרטוני YouTube</span></div>
            <div class="fact"><b>0</b><span>פעמים שמישהו אמר לה "זה חתול"</span></div>
            <div class="note">התוצאה: הרשת למדה לזהות חתולים בעצמה</div>
          </div>
        </div>`,
      },
      {
        title: 'משחק: המשפט המבולגן',
        sub: 'מילה אחת לכל משתתף ומשתתפת. ביחד: משפט הגיוני אחד על עולם ה AI',
        html: `
        <div class="grid g-1-1">
          <div class="card">
            <h3 class="accent">סבב 1</h3>
            <ul class="dots lg">
              <li>20 כרטיסים, 20 מילים</li>
              <li>בלי לדעת מה המשפט</li>
              <li>סידור בשורה, מימין לשמאל</li>
            </ul>
          </div>
          <div class="sw" data-sw="r1"></div>
        </div>`,
      },
      {
        title: 'סבב 2: עכשיו עם המשפט על הלוח',
        html: `
        <div class="words" data-sentence></div>
        <div class="grid g-1-1 mt">
          <div class="sw" data-sw="r2"></div>
          <div class="card center">
            <p class="muted">סבב 1: <b class="mono" data-result="r1">--:--</b></p>
            <p class="muted">סבב 2: <b class="mono" data-result="r2">--:--</b></p>
            <p class="xl strong">מה השתנה?</p>
          </div>
        </div>`,
      },
      {
        title: 'למה בפעם השנייה היה הרבה יותר קל?',
        sub: 'כי היה לנו מידע קודם. וזה בדיוק הסוד של AI',
        html: `
        <div class="grid g-4">
          <div class="card top-rose"><h3>זיהוי תבניות</h3><p>מוצא חוקיות בתוך ים של מידע</p></div>
          <div class="card top-lav"><h3>עיבוד שפה טבעית</h3><p>מבין וכותב שפה אנושית. באנגלית: NLP</p></div>
          <div class="card top-turq"><h3>למידת מכונה</h3><p>לומד מדוגמאות, לא מהוראות. באנגלית: Machine Learning</p></div>
          <div class="card top-mauve"><h3>עיבוד תמונה</h3><p>רואה, מזהה ומבין תמונות</p></div>
        </div>`,
      },
      {
        title: 'משחק המשפט: גרסה לבית',
        sub: 'לחיצה על המילים לפי הסדר הנכון. השעון מתחיל בלחיצה הראשונה',
        html: `<div data-wordgame></div>`,
      },
      {
        title: 'השפה של AI',
        sub: 'משחק התאמה: כל מושג וההסבר שלו',
        html: `
        <div class="terms">
          <span>LLM</span><span>פרומפט</span><span>הזיה</span><span>סוכן AI</span>
          <span>סקיל</span><span>פלאגין</span><span>חיבור MCP</span><span>אוטומציה</span>
        </div>
        <div class="center mt"><a class="btn" href="{{terms}}" target="_blank" rel="noopener">למשחק ההתאמה</a></div>`,
      },
    ],
  },

  /* ---------------- 5. מיומנות 1 ---------------- */
  {
    id: 'tools', color: 'turq', title: 'מיומנות 1: ללמוד את הכלים', desc: 'חכ"ם, צ\'אטבוט וסוכן, SAE, כלים ואוטומציה',
    screens: [
      {
        title: '3 מיומנויות חשובות בתקופה הזאת',
        html: `
        <div class="grid g-3">
          <div class="card top-turq center"><div class="num turq">1</div><h3>ללמוד את הכלים</h3><p class="muted">היכרות עם מה שקיים, ובחירה נכונה</p></div>
          <div class="card top-lav center"><div class="num lav">2</div><h3>לחפש את האמת</h3><p class="muted">בדיקה לפני אמון</p></div>
          <div class="card top-rose center"><div class="num rose">3</div><h3>לחזק את הקשר האנושי</h3><p class="muted">מה שאין לשום מכונה</p></div>
        </div>`,
      },
      {
        title: 'איך כותבים פרומפט איכותי? לחשוב חכ"ם',
        html: `
        <div class="grid g-3">
          <div class="card center"><div class="letter">ח</div><h3>חשיפה</h3><p>כל מה שהבוט צריך לדעת כדי להבין את התמונה: רקע, קהל יעד, מה כבר נעשה, מה נוסה ולא עבד.</p></div>
          <div class="card center"><div class="letter">כ</div><h3>כיוון</h3><p>איזה וייב מחפשים? רציני, הומוריסטי, נוסטלגי? כמו במאי שנותן הוראות לשחקנים בסצנה.</p></div>
          <div class="card center"><div class="letter">ם</div><h3>מטרה מהממת</h3><p>מה המטרה, ומה יהפוך את התשובה לכזאת שגורמת להגיד "וואו!"</p></div>
        </div>`,
      },
      {
        title: 'מצ\'אטבוט לסוכן',
        sub: 'מי שעונה, לעומת מי שעושה',
        html: `
        <div class="tablewrap"><table>
          <thead><tr><th>מאפיין</th><th>צ'אטבוט, Chatbot</th><th class="hl">סוכן AI, Agent</th></tr></thead>
          <tbody>
            <tr><th>אוטונומיה</th><td>תגובתי: עונה רק כשפונים אליו</td><td class="hl">פרואקטיבי: יוזם ומזהה מצבים בעצמו</td></tr>
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
        sub: 'טיוטה לעדכון',
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
        sub: 'סוכנים עם שם, תפקיד ואופי, ומוח משותף אחד',
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
    id: 'truth', color: 'lav', title: 'מיומנות 2: לחפש את האמת', desc: 'הזיות, ואיך בודקים אם תמונה נוצרה ב AI',
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
    id: 'human', color: 'rose', title: 'מיומנות 3: לחזק את הקשר האנושי', desc: 'מה שאין לשום מכונה',
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

  /* ---------------- לקריאה בבית ---------------- */
  {
    id: 'more', color: 'lav', title: 'לקריאה בבית', desc: 'הקשר שלנו עם כלי AI', extra: true,
    screens: [
      {
        title: 'הקשר שלנו עם כלי AI',
        sub: 'איך משדרגים את העבודה המשותפת עם בינה מלאכותית',
        html: `
        <p class="lg">נוכחות רגשית וסקרנות הופכות את הכלי מעוד כלי לשותף ליצירתיות ולחדשנות.</p>
        <div class="note">יותר נוכחות וסקרנות: שיתוף עמוק, חי ומפתיע. כוונה מחודדת, יצירתיות דולקת, חדשנות אמיתית.</div>`,
      },
    ],
  },
];

/* המשפט של משחק המשפט: בדיוק 20 מילים */
const SENTENCE = 'בינה מלאכותית לומדת מתוך מיליוני דוגמאות, מזהה תבניות בשפה ובתמונות, ולכן היא יודעת לנחש מה הכי סביר שיבוא אחר כך';
