export default {
  async fetch(request, env) {
    return new Response(
      "Telegram Persian Translator is ready!",
      {
        headers: { "content-type": "text/plain; charset=UTF-8" }
      }
    );
  }
};
