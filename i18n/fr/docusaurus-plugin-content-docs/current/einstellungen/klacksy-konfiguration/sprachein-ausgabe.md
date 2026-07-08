---
sidebar_position: 3
---

# Entrée et sortie vocales

Klacksy peut aussi être piloté par la voix — dans Paramètres > Voix de Klacksy, vous définissez avec quel service votre voix est transformée en texte (reconnaissance vocale, STT) et avec quelle voix Klacksy vous répond (synthèse vocale, TTS).

## Comment ça marche

**Reconnaissance vocale (STT) :** quatre moteurs sont disponibles — le navigateur gratuit (Web Speech API), Deepgram (streaming en temps réel), Groq Whisper (rapide et économique) ainsi qu'AssemblyAI (streaming). Pour tous sauf le navigateur, vous renseignez votre propre clé API et pouvez tester directement la connexion.

**Synthèse vocale (TTS) :** également quatre fournisseurs — Edge TTS (gratuit), OpenAI TTS, ElevenLabs et Google Cloud TTS. Selon le fournisseur choisi, Klacks recharge automatiquement les voix disponibles ; là aussi, la connexion peut être testée.

**Mode de sortie :** détermine si les réponses apparaissent uniquement en texte, uniquement en audio, en texte avec synthèse vocale déclenchable manuellement, ou en texte avec synthèse vocale automatique. La détection de silence (500 à 3000 ms, 1500 ms par défaut) détermine combien de temps on attend après la fin de la parole avant que l'enregistrement soit envoyé automatiquement.

**Nettoyage de la transcription :** si cette option est activée, le texte brut issu du STT passe en plus par un LLM qui supprime les mots de remplissage, résout les autocorrections et lisse la grammaire et les nombres. Vous choisissez vous-même le modèle utilisé pour cela ; via « Trouver le meilleur modèle », Klacks teste tous les modèles activés avec une fenêtre de contexte d'au moins 16 000 tokens et propose les candidats les moins chers et les plus rapides (délai d'expiration de 30 s par modèle). L'invite de nettoyage est modifiable et peut être réinitialisée aux réglages d'usine.

**Dictionnaire :** pour les termes que la reconnaissance vocale comprend régulièrement mal (par exemple des noms propres ou des termes techniques), vous créez des entrées avec le terme correct, une catégorie, des variantes de prononciation et une association de langue optionnelle — Klacksy corrige alors ces termes de manière ciblée.

## Bon à savoir

- Le mode navigateur ne nécessite aucune clé API, mais dépend de la reconnaissance vocale propre au navigateur utilisé et n'est pas comparable en qualité aux services payants.
- Une fois enregistrées, les clés API n'apparaissent plus que comme « Configurée », jamais en clair.
- La vérification de modèle proposée ici ne teste que l'aptitude au nettoyage de transcription (fenêtre de contexte ≥ 16 000 tokens) — pour l'aptitude générale en tant que modèle principal de Klacksy, il existe un test dédié, plus strict (voir Test de connexion des modèles).

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
