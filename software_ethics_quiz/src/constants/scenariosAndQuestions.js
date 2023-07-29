export const scenariosAndQuestions = [
    {
        'scenario': "Optus became a victim of a cyberattack that leaked up to 10 million Australians’ personal data which included not only the date of birth, email addresses, drivers’ licences but also their Medicare card and passport numbers. \n\nYou are a developer in a company that suffered from a similar security breach on user’s data.",

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
                        'answer': "Don't pay for the ransom and threaten the attackers to intimidate them into submission",
                        'score': 1,
                        'userFeedback': "This situation will depend on what the company is able to afford and the advice of cybersecurity experts which do not encourage paying the ransom except for exceptional cases because it does not guarantee the attackers will be honest. One exception is when sensitive data is at risk. Ideally, the authorities should be contacted for a breach of this scale."
                    },
                    {
                        'answer': "Find the attackers with the help of gov/police and stop the leak",
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
                        'answer': "Tell the public what was leaked",
                        'score': 3,
                        'userFeedback': "This option is somewhat correct, but option C which provides a guide on what to do is the better option as it provides an active solution to the problem."
                    },
                    {
                        'answer': "Provide Information on what was leaked and guides on what actions to take.",
                        'score': 4,
                        'userFeedback': "This is the ideal option as it provides an active solution as well as being honest to the public."
                    },
                    {
                        'answer': "Tell the public that a data breach occurred, but not what was leaked to prevent panic and backlash.",
                        'score': 2,
                        'userFeedback': "Covering up the situation may prevent backlash but it is unethical and dishonest to the parties affected."
                    },
                ],

                'ethicalPrinciples': "Honesty"
            },
            {
                'question': "Who is to blame for the data breach?",

                'answers': [
                    {
                        'answer': "The cybersecurity responsible for the company's entire cybersecurity measures",
                        'score': 2,
                        'userFeedback': "The cybersecurity is partly to blame but in this situation everyone can be blamed as it is also the developer's responsibility to ensure that the user data collected is safe."
                    },
                    {
                        'answer': "The hackers",
                        'score': 1,
                        'userFeedback': "The hackers are not to blame but in this situation. The developers and cybersecurity are responsible for making sure the data collected from users are safe. "
                    },
                    {
                        'answer': "The developers who wrote the code with a security vulnerability",
                        'score': 3,
                        'userFeedback': "The developers is partly to blame but in this situation everyone can be blamed as it is also the cybersecurity's responsibility to ensure that the user data collected is safe."
                    },
                    {
                        'answer': "All the above",
                        'score': 4,
                        'userFeedback': "Everyone is to blame in this situation because it is also the cybersecurity and developer's responsibility to ensure that the user data collected is safe."
                    },
                ],

                'ethicalPrinciples': "Competence"
            },
            {
                'question': "You notice you made a mistake that causes a security vulnerability when implementing the cybersecurity measures, but nobody else noticed and your  work passed the review and the update to the system has been deployed. What would you do?",

                'answers': [
                    {
                        'answer': "Report the issue and take responsibility to recall the update",
                        'score': 4,
                        'userFeedback': "As a developer, you should be responsible for your work and keep the public's interest first, so recalling the update is the ideal option."
                    },
                    {
                        'answer': "Keep quiet and enjoy your team’s success at another security patch",
                        'score': 1,
                        'userFeedback': "It is unethical to let a known vulnerability lie so that you may enjoy your success."
                    },
                    {
                        'answer': "Report and blame it on the code reviewer who missed the mistake",
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
        'scenario': "In the 2010s, personal data belonging to millions of Facebook users was collected without their consent by British consulting firm Cambridge Analytica, predominantly to be used for political advertising. You are a developer for a company in a similar situation.",

        'questions': [
            {
                'question': "A flaw in the survey feature of your company's platform allows third party users to collect data from users without their consent. Millions of user data has already been collected. Do you, as one of the developers on this feature",

                'answers': [
                    {
                        'answer': "Ignore the flaw (it is not my problem)",
                        'score': 1,
                        'userFeedback': "As a developer, you are also responsible for the company's mistake and it is ethically wrong to ignore the problem."
                    },
                    {
                        'answer': "Fix the flaw by yourself (if possible)",
                        'score': 3,
                        'userFeedback': "It is good that you fix bugs you find in the feature, however it  should be appropriate to let product managers know of changes."
                    },
                    {
                        'answer': "Bring the issue to your project manager to attempt to get it fixed by the developers",
                        'score': 4,
                        'userFeedback': "Best course of action, as identifying and fixing the problem asap will prevent further damage."
                    },
                    {
                        'answer': "Post the proof publicly on social media to defame Facebook",
                        'score': 2,
                        'userFeedback': "You are acting for the public interest, however it is not correct to defame a company and may go against your employment's contract regarding social media usage."
                    },
                ],

                'ethicalPrinciples': "The Primacy of the Public Interest"
            },
            {
                'question': "Following the scandal, you as a developer are attending a team meeting to discuss potential remedies to the situation. You should act for your stakeholders interest, including your customers and voice your opinions. What should your opinion be for this situation?",

                'answers': [
                    {
                        'answer': "Formal apology as a public statement, and attempt to fix the flaw in the survey, while also deleting and recovering distributed  user data (would require significant time and resources)",
                        'score': 4,
                        'userFeedback': "This would show the greatest competence for both stakeholders (company and users)."
                    },
                    {
                        'answer': "Formal apology to the public, however not attempting to recover distributed user data as this is already out of the company’s control.",
                        'score': 3,
                        'userFeedback': "This is showing competence for the company however ignoring other stakeholders such as end users."
                    },
                    {
                        'answer': "Explain to the public that their user data was not used for malicious purposes, and collection and tracking of user data is a major source of funds for the company that provides a free platform.",
                        'score': 2,
                        'userFeedback': "Even if the user data was not used for malicious purposes, and it is a source of funding for the company, it is still ethically inappropriate to collect user data without consent."
                    },
                    {
                        'answer': "Defend the company’s decision in the scandal as there were no clear laws or regulations that made the action illegal.",
                        'score': 1,
                        'userFeedback': "No competency in this action, somewhat being more like stubborn."
                    },
                ],

                'ethicalPrinciples': "Competence"
            },
            {
                'question': "Should you ask for permission to track and collect usage data/user information from your users?",

                'answers': [
                    {
                        'answer': "Yes, always",
                        'score': 4,
                        'userFeedback': "Tracking and collection of user data should always be done by the user's permission."
                    },
                    {
                        'answer': "No, as long as the data is not being sold to third parties",
                        'score': 2,
                        'userFeedback': "Ethically not correct as you are storing personal data of users without their consent."
                    },
                    {
                        'answer': "No, as long as the data is not being used",
                        'score': 3,
                        'userFeedback': "Ethically not correct as you are storing personal data of users without their consent."
                    },
                    {
                        'answer': "No, you don’t need to ask permission",
                        'score': 1,
                        'userFeedback': "Tracking and collection of user data without their knowledge and consent is a major ethical issue."
                    },
                ],

                'ethicalPrinciples': "Honesty/Privacy"
            },
            {
                'question': "Someone noticed you found a flaw in the survey feature and tried to persuade you to keep quiet and not fix the issue (Potential problems would arise if issue was raised, costing time and resources). What do you do?",

                'answers': [
                    {
                        'answer': "Accept the person’s persuasion and ignore the issue as it may affect your employment",
                        'score': 2,
                        'userFeedback': "Ethically, this is not desirable as you are aware of a problem that are affecting customers."
                    },
                    {
                        'answer': "Don’t be persuaded and raise the issue, attempting to fix it",
                        'score': 4,
                        'userFeedback': "Ethically this is the correct answer, however your employment may be at risk."
                    },
                    {
                        'answer': "Be persuaded, but raise awareness about the issue anonymously (ie, through social media) so that no one knows that it was you",
                        'score': 3,
                        'userFeedback': "If you are in a situation where your employment is at risk because of your actions, going public anonymously can be viable. However this is inappropriate in most cases as you may be breaking your company's terms of contract."
                    },
                    {
                        'answer': "Ignore the whole thing entirely (Acting ignorant will not risk your employment or cause additional troubles)",
                        'score': 1,
                        'userFeedback': "This is ethically wrong as you are aware of customer privacy concerns, even though you keep your employment safe."
                    },
                ],

                'ethicalPrinciples': "Professionalism"
            },
        ]
    },
    {
        'scenario': "In the 2010s, personal data belonging to millions of Facebook users was collected without their consent by British consulting firm Cambridge Analytica, predominantly to be used for political advertising. You are a developer for a company in a similar situationFacebook and Twitter use sophisticated algorithms to determine the exact combination of notifications, icons, and lurid content that will keep their users hooked. As a result, everyone’s social media experience is different, with each News Feed perfectly tailored to the user’s vices. The result is a digital echo chamber that reinforces an individual’s parochial worldview. Moreover, social media shows content a user is likely to click on, regardless of whether it’s true, useful, or good for their well-being.\n\nYou are part of a company publishing a popular social media application called Convey, similar to Facebook. In the interests of economic profit, your company has gradually implemented more and more features into Convey to drive user engagement in the hopes of gathering more user data.",

        'questions': [
            {
                'question': "It was uncovered in a study that the algorithms that drive user interests in Convey have also led to addiction in many young people. This addiction has negatively affected the general population’s mental health. Who should be the first party to act to solve this phenomenon?",

                'answers': [
                    {
                        'answer': "The stakeholders (investor) of the company",
                        'score': 1,
                        'userFeedback': "While stakeholders have a vested interest in the success of the application, they do not have the necessary influence over its features to make quick changes. They can band together and call for said changes, but this should not be the first expectation."
                    },
                    {
                        'answer': "The government and its regulatory bodies",
                        'score': 2,
                        'userFeedback': "While the government does hold responsibility for protecting its citizens from exploitative design, intervention is not guaranteed. Even if it is, it is usually slow. It also offloads responsibility from the company to demonstrate integrity."
                    },
                    {
                        'answer': "The developers of the application",
                        'score': 3,
                        'userFeedback': "Developers, being closely tied to the app, have a responsibility to voice concerns regarding the ethicality of features they implement. While they cannot directly make decisions, they can band together to voice their opposition to harmful features."
                    },
                    {
                        'answer': "The CEO and managers of the company",
                        'score': 4,
                        'userFeedback': "This is the ethically ideal scenario. The company managers have the most direct influence on the app and its features, as well as the most vested interest. Therefore, they also has the most ethical responsibility to practice integrity."
                    },
                ],

                'ethicalPrinciples': "Demonstrate Integrity"
            },
            {
                'question': "Which of the following is considered good practice for developers in Convey?",

                'answers': [
                    {
                        'answer': "Learn and develop new programming knowledge and skills regularly",
                        'score': 4,
                        'userFeedback': "This is the ideal option. The EA code of ethics \"Practise competently\" 2.1 told us to \"maintain and develop knowledge and skills\", making it a good practice for developers."
                    },
                    {
                        'answer': "It is fine to start working on tasks when I am unequipped with the required knowledge and learn as it goes",
                        'score': 3,
                        'userFeedback': "This is a bearable option. Learning in practice is fine, but it might cause undesirable outcome based on the EA code of ethics \"Practise competently\" 2.3, which reminds us to \"act on the basis of adequate knowledge\"."
                    },
                    {
                        'answer': "It is fine to assume something by myself without asking for a second opinion",
                        'score': 1,
                        'userFeedback': "This option is not wrong. It is against the EA Code of Ethics \"Practise competently\" 2.2 \"Represent areas of competence objectively\"."
                    },
                    {
                        'answer': "I only need to learn and develop new programming knowledge and skills when I cannot solve certain problems",
                        'score': 2,
                        'userFeedback': "This option is not desirable. It is true that we should learn if we feel stuck, but it is also important for developers to learn constantly according to the EA code of ethics \"Practise competently\" 2.1 \"maintain and develop knowledge and skills\"."
                    },
                ],

                'ethicalPrinciples': "Practise competently"
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
                        'answer': "As opposed to personalisation-oriented content, try to introduce diversity in the recommendation algorithm",
                        'score': 4,
                        'userFeedback': "This is the ideal option. It follows the Engineers Australia Code of Ethics \"Exercise leadership\" 3.2 \"Support and encourage diversity\"."
                    },
                    {
                        'answer': "Sanitise the content presented to younger-aged users, regardless of its authenticity, to protect them against potentially harmful information",
                        'score': 2,
                        'userFeedback': "This option is not desirable. It is against the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\"."
                    },
                    {
                        'answer': "Stop collecting any data and recommend unpolarised content instead, to be fully transparent to the users",
                        'score': 3,
                        'userFeedback': "This is not the best option. Not collecting any data does avoid all the privacy ethical issues, but it is not good for the platform from a business perspective."
                    },
                ],

                'ethicalPrinciples': "Exercise leadership"
            },
            {
                'question': "It was discovered that, by presenting users with more inflammatory content to boost user engagement, echo chambers and silos have been created on Convey. This has led to the propagation of misinformation and more extreme ideas inside these echo chambers, and have contributed to a larger divide in the population. What should be Convey's publisher's first course of action?",

                'answers': [
                    {
                        'answer': "Capitalise on the increase in polarisation to attract political and ideological investors as advertisers to further increase Convey’s reach and influence",
                        'score': 1,
                        'userFeedback': "This sacrifices sustainability for the sake of short term profitability, which is not ethical."
                    },
                    {
                        'answer': "Fight against regulations and allow users’ subconscious biases to determine their content, as is the situation now",
                        'score': 2,
                        'userFeedback': "This simply maintains the status quo, which is already ethically deficient. It will simply cause further divide in the community."
                    },
                    {
                        'answer': "Wait (and possibly fight) for regulations to require change from all social media platforms, so the company can make the required ethical changes without losing to its competitors",
                        'score': 3,
                        'userFeedback': "This is not ethically ideal, but bearable. If successful, it will allow the company to act ethically while also not sacrificing a competitive edge."
                    },
                    {
                        'answer': "Remove the design and algorithms that contribute to the creation of these echo chambers",
                        'score': 4,
                        'userFeedback': "This is ethically ideal. It directly addresses the issue at hand."
                    },
                ],

                'ethicalPrinciples': "Promote sustainability"
            },
        ]
    },
    {
        'scenario': "Ralph is an entry-level software engineer at SDX Alliance and is assigned to develop a new hard disk controller. He reuses code from his previous job at a start-up without informing anyone. During the review process, it is discovered that the code belongs to his former employer, and SDX Alliance may not be able to use it. If they can't, they will need to rewrite the entire code, delaying the release of the product.",

        'questions': [
            {
                'question': "What should be Ralph's course of action if it is found that they are not legally allowed to use the code?",

                'answers': [
                    {
                        'answer': "Leave it in and hope no one notices",
                        'score': 1,
                        'userFeedback': "This is a clear violation of integrity and copyright, and can result in legal ramifications for the SDK Alliance."
                    },
                    {
                        'answer': "Leave it up to his supervisors or managers to decide",
                        'score': 2,
                        'userFeedback': "As much as he can, Ralph should take responsibility for his failure. Simply following what his supervisors decide may result in him colluding to infringe on his previous company's copyright."
                    },
                    {
                        'answer': "Perform minor rewrites of sections of the code to try and obfuscate the issue",
                        'score': 3,
                        'userFeedback': "This skirts the issue, and may be necessary if an immediate release is required."
                    },
                    {
                        'answer': "Perform a full rewrite of the code, delaying the release of the product and hurting his standing at the company",
                        'score': 4,
                        'userFeedback': "This is the most ethical approach, as it directly addresses the problem as soon as possible."
                    },
                ],

                'ethicalPrinciples': "Demonstrate Integrity"
            },
            {
                'question': "Who was most responsible for knowing whether Ralph's code could or could not legally be used when developing for SDX Alliance?",

                'answers': [
                    {
                        'answer': "His previous company",
                        'score': 1,
                        'userFeedback': "Ralph's previous company should not be held responsible for Ralph's copyright infringement of their code, even if Ralph was the one who wrote the code. They may inform Ralph of the copyright status of his work there when he leaves, but they are not primarily responsible for preventing his infringement."
                    },
                    {
                        'answer': "Ralph's managers and/or supervisors",
                        'score': 2,
                        'userFeedback': "Ralph's managers or supervisors have no direct knowledge of the source of the code he produces, or even the code itself. It is also not their job to handle legal issues."
                    },
                    {
                        'answer': "SDX Alliance's lawyers",
                        'score': 3,
                        'userFeedback': "While the company's lawyers should always be aware of legal issues, they cannot be expected to comb through every piece of code written to see if they are copyright-free."
                    },
                    {
                        'answer': "Ralph",
                        'score': 4,
                        'userFeedback': "Ralph has the most knowledge and direct responsibility for the work he produces, and should therefore practice competency by ensuring that said work is free of legal issues."
                    },
                ],

                'ethicalPrinciples': "Practise competently"
            },
            {
                'question': "If you were the employee in the quality assurance team of SDX Alliance who discovered the copyright issue, what would you do?",

                'answers': [
                    {
                        'answer': "Report the issue regardless of whether others will find out, despite knowing the risk of losing months of effort.",
                        'score': 4,
                        'userFeedback': "This is the ideal option. It follows the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\" and 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                    {
                        'answer': "Privately bring the issue up with Ralph and let him decide",
                        'score': 3,
                        'userFeedback': "This option partially exercise 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\" by communicating with one of the stakeholders. There is a possibility that Ralph acts unethically. In that case, the passing off of responsibility to Ralph will have resulted in unethical action."
                    },
                    {
                        'answer': "Keep it to yourself. If no one finds out, the product will be launched on time with great improvement in process speed.",
                        'score': 2,
                        'userFeedback': "This option is not desirable. It is against the Engineers Australia Code of Ethics \"Exercise leadership\" 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                    {
                        'answer': "Propose to make modifications to the code so that it is different enough from the old one.",
                        'score': 1,
                        'userFeedback': "This option is incorrect. It violates the Engineers Australia Code of Ethics \"Exercise leadership\" 3.1 \"Uphold the reputation and trustworthiness of the practice of engineering\" and 3.3 \"Make reasonable efforts to communicate honestly and effectively to all stakeholders, taking into account the reliance of others on engineering expertise\"."
                    },
                ],

                'ethicalPrinciples': "Exercise leadership"
            },
            {
                'question': "It was discovered that, by presenting users with more inflammatory content to boost user engagement, echo chambers and silos have been created on Convey. This has led to the propagation of misinformation and more extreme ideas inside these echo chambers, and have contributed to a larger divide in the population. What should be Convey's publisher's first course of action?",

                'answers': [
                    {
                        'answer': "Capitalise on the increase in polarisation to attract political and ideological investors as advertisers to further increase Convey’s reach and influence",
                        'score': 1,
                        'userFeedback': "This sacrifices sustainability for the sake of short term profitability, which is not ethical."
                    },
                    {
                        'answer': "Fight against regulations and allow users’ subconscious biases to determine their content, as is the situation now",
                        'score': 2,
                        'userFeedback': "This simply maintains the status quo, which is already ethically deficient. It will simply cause further divide in the community."
                    },
                    {
                        'answer': "Wait (and possibly fight) for regulations to require change from all social media platforms, so the company can make the required ethical changes without losing to its competitors",
                        'score': 3,
                        'userFeedback': "This is not ethically ideal, but bearable. If successful, it will allow the company to act ethically while also not sacrificing a competitive edge."
                    },
                    {
                        'answer': "Remove the design and algorithms that contribute to the creation of these echo chambers",
                        'score': 4,
                        'userFeedback': "This is ethically ideal. It directly addresses the issue at hand."
                    },
                ],

                'ethicalPrinciples': "Promote sustainability"
            },
        ]
    },
]
