# Sorteador-de-nomes
🧪 Tecnologias Utilizadas
✅ Vue.js 3 (via CDN)
Usado como framework principal para criação da interface reativa e controle de estado.

API utilizada: Composition API (setup, reactive, computed).



✅ Animate.css
Biblioteca externa para animações de entrada e transição (fadeIn, bounceIn, fadeInDown etc.).

Traz feedback visual agradável nas interações.

✅ Google Fonts
Uso de fontes personalizadas (Pacifico, Roboto) para melhorar o design visual do site.

⚙️ Funcionalidades da Aplicação
🧍‍♂️ Inserção de nomes
O usuário pode digitar um nome e:

Pressionar Enter ou

Clicar no botão "add"

O nome é adicionado à lista se for válido:

Não vazio

Ainda não existente na lista

🚫 Mensagem de erro
Se a validação falhar, uma mensagem de erro animada aparece informando o problema:

Campo vazio

Nome duplicado

🗑️ Remoção de nomes
O usuário pode clicar em um nome da lista para removê-lo.

🎲 Sorteio de nome
Quando a lista tem mais de um nome, um botão aparece com o texto "olhe o perdedor".

Ao clicar, um nome aleatório é exibido como resultado.

🔁 Reset e novo sorteio
O usuário pode:

Começar novamente (resetar lista e estado)

Sortear novamente um novo nome sem reiniciar tudo

📦 Organização e Componentização
Lógica toda centralizada dentro do setup() usando reactive para estado e computed para lógica condicional.

(https://sorteador-de-nomes-eight.vercel.app/)
