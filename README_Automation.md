# e-META Automation Pack

This integration connects Tally (form input), Make (automation), and WhatsApp Business (communication)
to automate the flow of strategic decision-making support.

## How it works

1. User fills a form on Tally.
2. Make triggers and sends data to OpenAI API for synthesis.
3. Response is sent by Email or WhatsApp based on user preference.

---

Components:

- Tally form: `https://tally.so/r/YourFormID`
- Make scenario: see JSON config inside `make_scenario.json`
- WhatsApp integration: through Twilio API or WhatsApp Cloud API
