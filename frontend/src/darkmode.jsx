
import React, { useState, useEffect } from 'react';
import './App.css'; // تأكدي إن فيه ستايلات الوضع الداكن


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // أضف أو احذف كلاس 'dark' حسب الحالة
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* باقي مكونات الموقع */}
    </div>
  );
}

export default App;
