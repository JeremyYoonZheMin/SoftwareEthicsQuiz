export const scenariosAndQuestions = {
    'scenarios': [
        {
            'scenario': "Optus became a victim of a cyberattack that leaked up to 10 million Australians’ personal data which included not only the date of birth, email addresses, drivers’ licences but also their Medicare card and passport numbers. \n\nYou are a developer in a company that suffered from a similar security breach on user’s data.",
            
            'questions': [
                {
                    'question': "The attackers asked for a ransom, or they would leak the data. \n\nWhat would be the best course of action in this scenario?",

                    'answers': [
                        {
                            'answer': "Ignoring the ransom threat",
                            'score': 2,
                            'userFeedback': "Incorrect! \n\nThis situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not gurantee the attackers will be honest. One exception is when sensitive data is at risk. \n\nIdeally, the authorities should be contacted for a breach of this scale."
                        },
                        {
                            'answer': "Pay for the ransom and secure the leaked data",
                            'score': 3,
                            'userFeedback': "Incorrect! \n\nThis situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not gurantee the attackers will be honest. One exception is when sensitive data is at risk. \n\nIdeally, the authorities should be contacted for a breach of this scale."
                        },
                        {
                            'answer': "Don't pay for the ransom and threaten the attackers to intimidate them into submission",
                            'score': 1,
                            'userFeedback': "Incorrect! \n\nThis situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not gurantee the attackers will be honest. One exception is when sensitive data is at risk. \n\nIdeally, the authorities should be contacted for a breach of this scale."
                        },
                        {
                            'answer': "Find the attackers with the help of gov/police and stop the leak",
                            'score': 4,
                            'userFeedback': "Correct! This is the ideal option. \n\nThis situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not gurantee the attackers will be honest. One exception is when sensitive data is at risk. \n\nIdeally, the authorities should be contacted for a breach of this scale."
                        },
                    ],

                    'rationale': "This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not gurantee the attackers will be honest. One exception is when sensitive data is at risk. \n\nIdeally, the authorities should be contacted for a breach of this scale.",

                    'ethicalPrinciples': "The Primacy of the Public Interest"
                },
                {
                    'question': "TYour customers’ data is compromised which includes information like username, passwords, passport number, medicare etc. and you have to inform the general public about the situation. \n\nWhat should you convey to your customers?",

                    'answers': [
                        {
                            'answer': "Attempt to cover up the situation. Don't tell the public to avoid backlash",
                            'score': 1,
                            'userFeedback': "Incorrect! \n\nCovering up the situation may prevent backlash but it is unethical and dishonest to the parties affected."
                        },
                        {
                            'answer': "Tell the public what was leaked",
                            'score': 3,
                            'userFeedback': "This option is somewhat correct, but option C which provides a guide on what to do is the better option as it provides an active solution to the problem."
                        },
                        {
                            'answer': "Provide Information on what was leaked and guides on what actions to take.",
                            'score': 4,
                            'userFeedback': "Correct! This is the ideal option as it provides an active solution as well as being honest to the public."
                        },
                        {
                            'answer': "Tell the public that a data breach occured, but not what was leaked to prevent panic and backlash.",
                            'score': 2,
                            'userFeedback': "Incorrect! \n\nCovering up the situation may prevent backlash but it is unethical and dishonest to the parties affected."
                        },
                    ],

                    'rationale': "Options B and C are viable, but C is the better options because it provides a solution to the problem that the affected parties can take to keep their information safe. \n\nOptions A and D are not honest.",

                    'ethicalPrinciples': "Honesty"
                },
                {
                    'question': "Who is to blame for the data breach?",

                    'answers': [
                        {
                            'answer': "The cybersecurity responsible for the company's entire cybersecurity measures",
                            'score': 2,
                            'userFeedback': "Incorrect! \n\nThe cybersecurity is partly to blame but in this situation everyone can be blamed as it is also the developer's responsibility to ensure that the user data collected is safe."
                        },
                        {
                            'answer': "The hackers",
                            'score': 1,
                            'userFeedback': "Incorrect! \n\nThe hackers are not to blame but in this situation. The developers and cybersecurity are responsible for making sure the data collected from users are safe. "
                        },
                        {
                            'answer': "The developers who wrote the code with a security vunerability",
                            'score': 3,
                            'userFeedback': "Incorrect! \n\nThe developers is partly to blame but in this situation everyone can be blamed as it is also the cybersecurity's responsibility to ensure that the user data collected is safe."
                        },
                        {
                            'answer': "All the above",
                            'score': 4,
                            'userFeedback': "Correct! \n\nEveryone is to blame in this situation because it is also the cybersecurity and developer's responsibility to ensure that the user data collected is safe."
                        },
                    ],

                    'rationale': "Everyone is to blame in this situation because it is the cybersecurity and developer's responsibility to ensure that the user data collected is safe.",

                    'ethicalPrinciples': "Competence"
                },
                {
                    'question': "You notice you made a mistake that causes a security  vunerability when implementing the cybersecurity measures, but nobody else noticed and your  work passed the review and the update to the system has been deployed. \n\nWhat would you do?",

                    'answers': [
                        {
                            'answer': "Report the issue and take resposibility to recall the update",
                            'score': 4,
                            'userFeedback': "Correct! \n\nAs a developer, you should be responsible for your work and keep the public's interest first, so recalling the update is the ideal option."
                        },
                        {
                            'answer': "Keep quiet and enjoy your team’s success at another security patch",
                            'score': 1,
                            'userFeedback': "Incorrect! \n\nIt is unethical to let a known vunearbility lie so that you may enjoy your success."
                        },
                        {
                            'answer': "Report and blame it on the code reviewer who missed the mistake",
                            'score': 3,
                            'userFeedback': "Incorrect! \n\nIt may be partly the code reviewer's fault for ovelooking the mistake, but it is also partly your fault for missing it too. It is unprofessional to put the blame on another team member."
                        },
                        {
                            'answer': "Report the issue but don't recall the update",
                            'score': 2,
                            'userFeedback': "Incorrect! \n\nNotrecalling the update means that the user's data is constantly put at risk."
                        },
                    ],

                    'rationale': "As a developer, you should be responsible for your work and keep the public's interest first, so recalling the update is the ideal option.",

                    'ethicalPrinciples': "Professionalism"
                },
            ]
        },
        ""
    ]
}