export interface IGoalItem
{
  id: number;
  name: string;
  description: string
}

export interface IGetGoalItems
{
  data: IGoalItem[]
}
