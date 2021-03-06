module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Tell the world a little bit about your project.',
	},
  {
    type: 'input',
    name: 'usage',
    message: 'What is the deployed link of your project? (Please put https:// in it)',
  },
  {
	  type: 'input',
	  name: 'demo',
	  message: 'What is the deployed link of your live demonstration of this project? (Please put https:// in it)',

  },
	{
		type: 'input',
		name: 'contribution',
		message: 'Share instructions on how others can contribute to your project.',
	},
  {
    type: 'input',
    name: 'tests',
    message: 'Share some of the tests you ran for your project.',
  },
	{
		type: 'input',
		name: 'github',
		message: 'What is your github URL? (Please put https:// in it)',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
	{
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Just Take MIT', 'Dont Make Me Hurt You'],
        message: 'Which license would you like to use for your project?',
      },
];