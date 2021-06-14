const fs=require('fs');
const chalk=require('chalk');

// FUNCTION TO ADD A NEW NOTE
const AddNotes=(title,body)=>
{
    const notes=LoadNotes();
    

    //Method 1: to check note with same name exist or not
    /*var duplicate=notes.map((note)=>{
        return note.title==title;
    })
    if(duplicate.findIndex((el)=>{return el===true})===-1)
    {
      notes.push({
        title:title,
        body:body
      })
    }
    else
    {
        console.log("notes title taken");
    }
     SaveNotes(notes);
    */

    //Method2 : to check note with same name exist or not
    //  var duplicate=notes.filter((note)=>note.title==title);
    //  if(duplicate.length==0)
    //  {
    //     notes.push({
    //         title:title,
    //         body:body
    //       })  
    //       SaveNotes(notes);
    //       console.log(chalk.green.inverse("Note is added"));
    //  }
    //  else
    //  { 
    //     console.log(chalk.red.inverse("Note title taken"));
    //  }

    //Method3 : to check note with same name exist or not
    var duplicate=notes.find((note)=>note.title===title);

    if(!duplicate)
    {
        notes.push({
             title:title,
             body:body
           })  
          SaveNotes(notes);
          console.log(chalk.green.inverse("Note is added"));
      }
      else
      { 
         console.log(chalk.red.inverse("Note title taken"));
      }
}


//FUNCTION TO DELETE A NOTE
const RemoveNotes=(title)=>
{
    const notes=LoadNotes();
    //method1 : to delete notes 
     /*var n=notes.length;
     for(var i=0;i<n;i++)
    {
        if(notes[i].title==title)
        {
            continue;
        }
        data.push(notes[i]);
    }
    SaveNotes(data);*/ 
     
    //Method 2: delete notes
    var n=notes.length;
    var duplicate=notes.filter((el)=>el.title!==title);
    if(duplicate.length==n)
    {
        console.log(chalk.red.inverse("No note found!"));
    }
    else
    {
      console.log(chalk.green.inverse("Note deleted!"));
       SaveNotes(duplicate);
    }
}
//FUNCTION TO DISPLAY ALL NOTES
const ListNotes=()=>{
    const notes=LoadNotes();
    console.log(chalk.red("Your Notes"));
    // Method1: for traversing notes list
    // for(var el of notes)
    // {
    //     console.log(el.title);
    // }

    //Method2: for traversing notes list
    notes.forEach(el => {
        console.log(el.title);
    });
}

//FUNCTION TO READ A NOTE
const ReadNotes=(title)=>{
    const notes=LoadNotes();

    var duplicate=notes.find(note=>note.title===title);


    if(duplicate===undefined)
    {
        console.log(chalk.red("No note found!"));
    }
    else
    {
        console.log(chalk.red("Your Notes"));   
        console.log(duplicate.title);
        console.log(duplicate.body);
    }
    
}
// FUNCTION TO SAVE THE CHANGES TO THE NOTE
const SaveNotes=(notes)=>
{
    const final=JSON.stringify(notes);
    fs.writeFileSync('notes.json',final);

}

// FUNCTION TO FETCH ALL NOTES
const LoadNotes=()=>
{
    try
    {
      const temp1=fs.readFileSync('notes.json');
      const temp2=temp1.toString();
      const notes=JSON.parse(temp2);
      return notes;
    }catch(e)
    {
        return [];

    }
}

module.exports={
    AddNotes: AddNotes,
    RemoveNotes:RemoveNotes,
    ListNotes: ListNotes,
    ReadNotes : ReadNotes
    
}