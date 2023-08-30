export const scenariosAndQuestions = [
    {
        'scenario': "Optus became a victim of a cyberattack that leaked up to 10 million Australians’ personal data which included not only the date of birth, email addresses, drivers’ licences but also their Medicare card and passport numbers.\n\nYou are a developer in a company that suffered from a similar security breach on user’s data.",

        'questions': [
            {
                'question': "The attackers asked for a ransom, or they would leak the data. What would be the best course of action in this scenario?",

                'answers': [
                    {
                        'answer': "Ignoring the ransom threat",
                        'score': 2,
                        'userFeedback': "This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not guarantee the attackers will be honest. One exception is when sensitive data is at risk. Ideally, the authorities should be contacted for a breach of this scale."
                    },
                    {
                        'answer': "Pay for the ransom and secure the leaked data",
                        'score': 3,
                        'userFeedback': "This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not guarantee the attackers will be honest. One exception is when sensitive data is at risk. Ideally, the authorities should be contacted for a breach of this scale."
                    },
                    {
                        'answer': "Threaten attackers with legal actions",
                        'score': 1,
                        'userFeedback': "This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not guarantee the attackers will be honest. One exception is when sensitive data is at risk. Ideally, the authorities should be contacted for a breach of this scale."
                    },
                    {
                        'answer': "Seek help from authorities",
                        'score': 4,
                        'userFeedback': "This is the ideal option. This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not guarantee the attackers will be honest. One exception is when sensitive data is at risk. Ideally, the authorities should be contacted for a breach of this scale."
                    },
                ],

                'ethicalPrinciples': "The Primacy of the Public Interest"
            },
            {
                'question': "Your customers’ data is compromised which includes information like username, passwords, passport number, medicare etc. and you have to inform the general public about the situation. What should you convey to your customers?",

                'answers': [
                    {
                        'answer': "Attempt to cover up the situation. Don't tell the public to avoid backlash",
                        'score': 1,
                        'userFeedback': "Covering up the situation may prevent backlash but it is unethical and dishonest to the parties affected."
                    },
                    {
                        'answer': "Tell customers what was leaked and reassure data recovery",
                        'score': 3,
                        'userFeedback': "This option is somewhat correct, but option C which provides a guide on what to do is the better option as it provides an active solution to the problem."
                    },
                    {
                        'answer': "Tell customers what was leaked and what actions they can take",
                        'score': 4,
                        'userFeedback': "This is the ideal option as it provides an active solution as well as being honest to the public."
                    },
                    {
                        'answer': "Tell customers there was a breach but not what was leaked",
                        'score': 2,
                        'userFeedback': "Covering up the situation may prevent backlash but it is unethical and dishonest to the parties affected."
                    },
                ],

                'ethicalPrinciples': "Honesty"
            },
            {
                'question': "You notice you made a mistake that causes a security vulnerability when implementing the cybersecurity measures, but nobody else noticed and your  work passed the review and the update to the system has been deployed. What would you do?",

                'answers': [
                    {
                        'answer': "Report the issue and try to recall the update",
                        'score': 4,
                        'userFeedback': "As a developer, you should be responsible for your work and keep the public's interest first, so recalling the update is the ideal option."
                    },
                    {
                        'answer': "Keep quiet and enjoy your team’s success at another security patch",
                        'score': 1,
                        'userFeedback': "It is unethical to let a known vulnerability lie so that you may enjoy your success."
                    },
                    {
                        'answer': "Recall the update and identify the code reviewer who missed the mistake",
                        'score': 3,
                        'userFeedback': "It may be partly the code reviewer's fault for overlooking the mistake, but it is also partly your fault for missing it too. It is unprofessional to put the blame on another team member."
                    },
                    {
                        'answer': "Report the issue but don't recall the update",
                        'score': 2,
                        'userFeedback': "Not recalling the update means that the user's data is constantly put at risk."
                    },
                ],

                'ethicalPrinciples': "Professionalism"
            },
        ]
    },
    {
        'scenario': "Facebook and Twitter use sophisticated algorithms to determine the exact combination of notifications, icons, and eye catching features to keep users hooked.\n\nYou are part of a company developing a social media application called Convey, similar to Facebook. To drive profits, your company has gradually implemented more features into Convey to drive user engagement.",

        'questions': [
            {
                'question': "Features aimed at maximising user retention are known to be addictive and negatively affect user's mental health. Who should act first to reduce the harm?",

                'answers': [
                    {
                        'answer': "Stakeholders (investor) of the company",
                        'score': 1,
                        'userFeedback': "While stakeholders have a vested interest in the success of the application, they do not have the necessary influence over its features to make quick changes. They can band together and call for said changes, but this should not be the first expectation."
                    },
                    {
                        'answer': "Government and its regulatory bodies",
                        'score': 2,
                        'userFeedback': "While the government does hold responsibility for protecting its citizens from exploitative design, intervention is not guaranteed. Even if it is, it is usually slow. It also offloads responsibility from the company to demonstrate integrity."
                    },
                    {
                        'answer': "Developers of the application",
                        'score': 3,
                        'userFeedback': "Developers, being closely tied to the app, have a responsibility to voice concerns regarding the ethicality of features they implement. While they cannot directly make decisions, they can band together to voice their opposition to harmful features."
                    },
                    {
                        'answer': "CEO and managers of the company",
                        'score': 4,
                        'userFeedback': "This is the ethically ideal scenario. The company managers have the most direct influence on the app and its features, as well as the most vested interest. Therefore, they also has the most ethical responsibility to practice integrity."
                    },
                ],

                'ethicalPrinciples': "Demonstrate Integrity"
            },
            {
                'question': "Which one of the following do you think Convey should do to become a revolutionary social media platform?",

                'answers': [
                    {
                        'answer': "Provide more personalised content than Facebook and Twitter",
                        'score': 1,
                        'userFeedback': "Making contents more personalised will make the digital echo chamber worse."
                    },
                    {
                        'answer': "Introduce diversity in the content recommendation algorithm",
                        'score': 4,
                        'userFeedback': "This is the ideal option. It follows the Engineers Australia Code of Ethics \"Exercise leadership\" 3.2 \"Support and encourage diversity\"."
                    },
                    {
                        'answer': "Sanitise content for under aged users",
                        'score': 2,
                        'userFeedback': "This option is not desirable. It is against the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\"."
                    },
                    {
                        'answer': "Personalise content without polarising user base",
                        'score': 3,
                        'userFeedback': "Not polarising the user base is a positive change. But it does not follow the EA principle 3.2 \"Support and encourage diversity\"."
                    },
                ],

                'ethicalPrinciples': "Exercise leadership"
            },
            {
                'question': "In an attempt to boost user engagement, echo chambers have been created on Convey. This has led to the propagation of misinformation and have created a larger divide in the user base. What should Convey’s first course of action be?",

                'answers': [
                    {
                        'answer': "Allow politicians to invest and capitalise on the polarisation",
                        'score': 1,
                        'userFeedback': "This sacrifices sustainability for the sake of short term profitability, which is not ethical."
                    },
                    {
                        'answer': "Campaign for change in regulations for all social media platforms",
                        'score': 3,
                        'userFeedback': "This simply maintains the status quo, which is already ethically deficient. It will simply cause further divide in the community."
                    },
                    {
                        'answer': "Wait for regulations to change for all social media platforms",
                        'score': 2,
                        'userFeedback': "This is not ethically ideal, but bearable. If successful, it will allow the company to act ethically while also not sacrificing a competitive edge."
                    },
                    {
                        'answer': "Remove algorithms that contribute to these echo chambers",
                        'score': 4,
                        'userFeedback': "This is ethically ideal. It directly addresses the issue at hand."
                    },
                ],

                'ethicalPrinciples': "Promote sustainability"
            },
        ]
    },
    {
        'scenario': "Dona is an entry-level software engineer at SDX Alliance and is assigned to develop a new hard disk controller. They reuse code from their previous job at a start-up without informing anyone. During the review process, it is discovered that the code belongs to their former employer, and SDX Alliance may not be able to use it. If they can't, they will need to rewrite the entire code, delaying the release of the product.",

        'questions': [
            {
                'question': "What should Dona's course of action be if it is found that they are not legally allowed to use the code?",

                'answers': [
                    {
                        'answer': "Leave it in and hope no one notices",
                        'score': 1,
                        'userFeedback': "This is a clear violation of integrity and copyright, and can result in legal ramifications for the SDK Alliance."
                    },
                    {
                        'answer': "Leave it up to managers to decide",
                        'score': 2,
                        'userFeedback': "As much as they can, Dona should take responsibility for their failure. Simply following what their supervisors decide may result in them colluding to infringe on his previous company's copyright."
                    },
                    {
                        'answer': "Perform minor rewrites of sections of the code to try and obfuscate the issue",
                        'score': 3,
                        'userFeedback': "This skirts the issue, and may be necessary if an immediate release is required."
                    },
                    {
                        'answer': "Perform a full rewrite of the code and delaying the release of the product",
                        'score': 4,
                        'userFeedback': "This is the most ethical approach, as it directly addresses the problem as soon as possible."
                    },
                ],

                'ethicalPrinciples': "Demonstrate Integrity"
            },
            {
                'question': "Who was most responsible for knowing whether Dona's code could be reused when developing for SDX Alliance?",

                'answers': [
                    {
                        'answer': "Dona's previous employer",
                        'score': 1,
                        'userFeedback': "Dona's previous employer should not be held responsible for Dona's copyright infringement of their code, even if Dona was the one who wrote the code. They may inform Dona of the copyright status of her work there when he leaves, but they are not primarily responsible for preventing her infringement."
                    },
                    {
                        'answer': "Dona's manager",
                        'score': 2,
                        'userFeedback': "Dona's managers or supervisors have no direct knowledge of the source of the code she produces, or even the code itself. It is also not their job to handle legal issues."
                    },
                    {
                        'answer': "SDX Alliance's lawyers",
                        'score': 3,
                        'userFeedback': "While the company's lawyers should always be aware of legal issues, they cannot be expected to comb through every piece of code written to see if they are copyright-free."
                    },
                    {
                        'answer': "Dona",
                        'score': 4,
                        'userFeedback': "Dona has the most knowledge and direct responsibility for the work she produces, and should therefore practice competency by ensuring that said work is free of legal issues."
                    },
                ],

                'ethicalPrinciples': "Practise competently"
            },
            {
                'question': "If you were the employee in the quality assurance team of SDX Alliance who discovered the copyright issue, what would you do?",

                'answers': [
                    {
                        'answer': "Report the issue despite the potential delay it will cause",
                        'score': 4,
                        'userFeedback': "This is the ideal option. It follows the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\" and 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                    {
                        'answer': "Privately bring the issue up with Dona and let them decide",
                        'score': 3,
                        'userFeedback': "This option partially exercise 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\" by communicating with one of the stakeholders. There is a possibility that Dona acts unethically. In that case, the passing off of responsibility to Dona will have resulted in unethical action."
                    },
                    {
                        'answer': "Keep it to yourself and allow product release",
                        'score': 1,
                        'userFeedback': "This option is against the Engineers Australia Code of Ethics \"Exercise leadership\" 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                    {
                        'answer': "Suggest to Dona to modify code so that it is different enough from the old one",
                        'score': 2,
                        'userFeedback': "This option violates the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\" and 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                ],
                'ethicalPrinciples': "Exercise leadership"
            }
        ]
    },
]
