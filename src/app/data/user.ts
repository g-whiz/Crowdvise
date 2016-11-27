/*
 * Abstract User type.
 *
 */
export
interface User {
	// A User ID: base32 encoded integer
	id : string;

	// A User's first name
	firstName: string;

	// A User's last name
	lastName : string;

	email : string;

	password: string;
}

export
interface InvestmentAdvisor extends User {
	/* ContactDetails */
	telNo? : string;
	website? : string;

	/* Qualifications */
	qualifications? : Qualifications;

	// An integer representing the reputation of this InvestmentAdvisor.
	// Negative is very bad. Higher is better.
	reputation : number;
}

export
enum Qualifications {
	// TODO: booleans representing whether each qualification is held
}

export
interface AdviceSeeker extends User {

	// 	Specifies the experience in the investment industry
	// 	that this AdviceSeeker has.
	experience : Experience;

	// The total number of questions this AdviceSeeker hask asked.
	numQuestions : number;

	// An integer from 1 to 5 representing an AdviceSeeker's tolerance to 
	// risk in investment
	riskTolerance : RiskTolerance;
}


export
enum Experience {
	noExperience = 1,
	amateurInvestor,
	professionalInvestor
}


export
enum RiskTolerance {
	low = 1,
	medLow,
	med,
	medHigh,
	high
}
