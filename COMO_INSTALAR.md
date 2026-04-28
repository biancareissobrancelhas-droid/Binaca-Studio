# ✦ Bianca Reis Studio — App para iPhone (PWA)

## Como instalar no iPhone em 3 passos

### Pré-requisito
Você precisa de um servidor web para hospedar os arquivos. As opções mais fáceis são:

---

## Opção A — Hospedagem gratuita no GitHub Pages (Recomendado)

1. **Crie uma conta gratuita** em [github.com](https://github.com)
2. **Crie um repositório novo** chamado `bianca-studio`
3. **Suba os 5 arquivos** para o repositório:
   - `bianca_reis_pwa.html` (renomeie para `index.html`)
   - `sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
4. **Ative o GitHub Pages**: Settings → Pages → Branch: main → Save
5. Seu app ficará disponível em: `https://seu-usuario.github.io/bianca-studio`

---

## Opção B — Servidor local (para testar em casa)

Se você tiver um computador na mesma rede WiFi:

```bash
# No terminal do computador, na pasta dos arquivos:
python3 -m http.server 8080
```

Acesse pelo iPhone: `http://192.168.x.x:8080/bianca_reis_pwa.html`

---

## Instalando no iPhone (após ter a URL)

1. **Abra o Safari** no iPhone (obrigatório — não funciona no Chrome do iOS)
2. **Acesse a URL** do seu app
3. Toque no ícone **Compartilhar** (quadrado com seta para cima, na barra inferior)
4. Role para baixo e toque em **"Adicionar à Tela de Início"**
5. Toque em **"Adicionar"** no canto superior direito
6. 🎉 O app aparece na tela inicial igual a qualquer app!

---

## Funcionalidades

✅ Funciona offline (após primeira abertura)  
✅ Dados salvos no próprio iPhone (IndexedDB)  
✅ Tela cheia sem barra do navegador  
✅ Ícone personalizado na tela inicial  
✅ Menu inferior adaptado para celular  
✅ Botão "+" central para novo atendimento rápido  
✅ WhatsApp integrado  
✅ Aniversários de clientes  
✅ Financeiro completo  

---

## Sobre os dados

Os dados ficam **salvos no iPhone**, na memória do Safari. Eles **não somem** quando você fechar o app. Use o botão **"Salvar Dados"** (disponível em desktop) para criar backups em JSON.

---

*Desenvolvido para Bianca Reis Studio — Micropigmentação* ✦
