import { MessageRepository } from "./messages.repositories";

export class MessagesService
{
messagesrespo:MessageRepository;
constructor()
{
    // DONOT DO THIS REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesrespo=new MessageRepository();
}

findOne(id:string)
{
    return this.messagesrespo.findOne(id);
}
findAll()
{
    return this.messagesrespo.findAll();
}
create(content:string)
{
    return  this.messagesrespo.create(content);
}
}