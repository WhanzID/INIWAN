function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMsg = input.value.trim();

  if (userMsg === "") return;

  // Tampilkan pesan user
  const userDiv = document.createElement("div");
  userDiv.className = "msg user";
  userDiv.innerText = userMsg;
  chatBox.appendChild(userDiv);

  // Fake reply logic
  const botDiv = document.createElement("div");
  botDiv.className = "msg bot";
  let reply = fakeReply(userMsg);
  botDiv.innerText = reply;
  chatBox.appendChild(botDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function fakeReply(msg) {
  // Beberapa balasan palsu
  const replies = {
    "halo": "Halo juga! Ada yang bisa saya bantu?",
    "siapa kamu": "Saya bot rahasia Whanx 😎",
    "virtex": "Mohon maaf, sistem kami mendeteksi pesan mencurigakan.",
    "kamu bot?": "Bukan kok, saya cuma manusia yang mirip AI 🤖",
  };
  msg = msg.toLowerCase();
  return replies[msg] || "Maaf, saya tidak mengerti maksudmu 😅";
}

function sendToMessenger() {
  const input = document.getElementById("user-input");
  const msg = encodeURIComponent(input.value.trim());
  if (msg !== "") {
    // Ganti dengan username Facebook kamu
    window.open("https://m.me/whanzid.official?text=" + msg, "_blank");
  }
}
