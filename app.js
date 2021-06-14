const chalk=require('chalk');
const yargs=require('yargs');
const notes=require('./notes.js');
const {argv}=require('yargs');

//const command=process.argv[2];

//customise yargs version
yargs.version('1.1.0');

//Add a note
yargs.command({
   command:'add',
   describe:'add new note',
   builder:
   {
      title:{
         describe:'Title',
         demandOption: true,
         type: 'string'
      },
      
      body:{
         describe:'description',
         demandOption:true,
         type:'string'
      }
   },
   handler()
   {
      notes.AddNotes(argv.title,argv.body);
   }
});

//Delete a note 
yargs.command({
   command:'remove',
   describe:'removing a note',
   builder:
   {
      title:{
         describe:'Title',
         demandOption: true,
         type: 'string'
      }
   },
   handler()
   {
      notes.RemoveNotes(argv.title);
   }
});


//Listing all note 
yargs.command({
   command:'list',
   describe:'listing all notes',
   handler()
   {
      notes.ListNotes();
   }
});

//read a note 
yargs.command({
   command:'read',
   describe:'reading a note',
   builder:
   {
      title:{
      describe:'Title',
      demandOption:true,
      type:'string'
      }
   },
   handler()
   {
      notes.ReadNotes(argv.title);
   }
});


yargs.parse();

//console.log(yargs.argv);





