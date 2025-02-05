const API_TOKEN = '7748966624:AAH1v92Zd47ry7iowMFCDgoP8FjQnNVk4JU';

const getChatId = async () => {
  const URL = `https://api.telegram.org/bot${API_TOKEN}/getUpdates`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      const chatId = data.result[0].message.chat.id;
      console.log('CHAT_ID:', chatId);
    } else {
      console.log('Нет сообщений для получения CHAT_ID');
    }
  } catch (error) {
    console.error('Ошибка при получении CHAT_ID:', error);
  }
};

getChatId();
