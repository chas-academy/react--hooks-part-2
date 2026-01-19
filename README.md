# 🦍 Frontendutveckling med ramverk - React hooks - del 2

I denna uppgift kommer du lära dig om `useContext` och `useMemo`. Två vanligt förekommande och mycket användbara React hooks.

## useContext

Används för att göra värden, som exempelvis state, lättillgängliga inom hela komponentträdet som omsluts av en "context". Om man vill skapa en global store kan man omsluta hela sin applikation med en och samma context.

## useMemo

Memoisation är en optimeringsteknik inom programmering som lagrar uträkningen av data och uppdaterar den bara när det är absolut nödvändigt. `useMemo`låter dig kontrollera när en uträkning ska göras om genom att låta den lyssna på uppdateringen av specifika värden. Istället för att uträkningen görs om vid varje omrendering. Perfekt för logiktunga funktioner och liknande.

## 🎯 Delmål

**Läs alltid igenom existerande kod innan du börjar göra ändringar. Det är viktigt att förstå vad som redan finns där och hur det är byggt.**

## 🌐 1. Skapa ett globalt state

- [ ] **Genomförd**

- Skapa ett context med relevanta värden och typing och exportera det
- Importera contexten och se till att den omsluter hela appen
- Passa in den state-variabel och action som togglar profilen högst upp på sidan
- Hämta ut värdena i routen `context.tsx` och skriv logik som togglar profilen med ett knapptryck därifrån

## 💾 2. Memoisera den tidskrävande funktionen

- [ ] **Genomförd**

- Gå till `memo.tsx` och studera koden där
- Testa att toggla de olika knapparna. Observera att UI:t laggar även när det slumpmässiga numret _inte_ uppdateras
- Den tidskrävande funktionen används redan på ett ställe. Hitta den raden och titta på vad den använder sig av för värde
- Använd `useMemo`för att göra så att funktionen bara körs när relevanta värden har uppdaterats
