export class ClassModel {
  protected constructor(protected readonly data: any = {}) {}

  public stringify = () => {
    return JSON.stringify(this.data);
  };
}
