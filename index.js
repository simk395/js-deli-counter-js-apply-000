function takeANumber(line, name){
<<<<<<< HEAD
  line.push(name);
  return "Welcome, "+ name +". You are number " + line.length +" in line.";
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + line.shift() +".";
  }

}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }

  else{
    var i = 0;
    while(i < line.length){
      line[i] = " " + (i + 1) + ". " + line[i];
      i++;
    }
    return "The line is currently:" + line;

  }

=======
  return "Welcome, " + name + ". You are number "+ (line.length + 1)  + " in line.";
>>>>>>> fcdcc4bb030c43aac668396c9209ddbb37b0466a
}
