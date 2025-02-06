export const sendToTelegram = async (formData) => {
  const API_TOKEN = '7748966624:AAH1v92Zd47ry7iowMFCDgoP8FjQnNVk4JU'; // Замените на ваш токен
  const CHAT_ID = '1883201209'; // Замените на ваш Chat ID

  const message = `📩 Нова заявка:\n
🏷 Имя: ${formData.name}
🐶 Улюбленець: ${formData.pet}
📞 Телефон: ${formData.tel}
📧 Почта: ${formData.mail}`;

  const URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();
    console.log('✅ Данные отправлены в Telegram:', result);
  } catch (error) {
    console.error('❌ Ошибка отправки в Telegram:', error);
  }
};
