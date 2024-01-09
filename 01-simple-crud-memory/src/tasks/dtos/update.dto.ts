export class UpdateTaskDto {

  title: string
  description: string

  constructor(title: string, description: string){
    this.title = title;
    this.description = description;
  }

  static create(title: string, description: string) {
    if(!title) throw new Error('El título es obligatorio')
    if(!description) throw new Error('El título es obligatorio')

    return new UpdateTaskDto(title, description);

  }

}