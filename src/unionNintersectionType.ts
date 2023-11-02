{
  // Union and Intersection Type

  type JrDeveloper = "Good Developer" | "Bad Developer";
  type SrDeveloper = "Good Developer" | "Jr Developer";
  type Developer = JrDeveloper | SrDeveloper;
  type NewDev = string | number;
  type User = {
    name: string;
    email?: string;
    bloodGroup: "A+" | "A-" | "AB+";
    gender: "Male" | "Female";
  };

  const jrDeveloper: JrDeveloper = "Bad Developer";
  const srDeveloper: SrDeveloper = "Good Developer";
  const Developer: Developer = "Good Developer";

  const user: User = {
    name: "Sakib",
    bloodGroup: "A-",
    gender: "Male",
  };

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDev = FrontendDev & {
    designation2: "Backend Developer";
  };
  type FullstackDev = FrontendDev & BackendDev;
}
