interface DataType {
  id: number;
  title: string;
  content: string;
  status: boolean;
}

interface UserType {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface PersonalType {
  nama: string;
  alamat: string;
}

interface PendidikanType extends PersonalType {
  sd: string;
  smp: string;
  sma: string;
  sarjana: string;
}

interface OrganizationType {
  id_organization: number;
  organization_name: string;
  role: string;
  description: string;
}

interface ExperienceDetailType {
  id_experience: number;
  company: string;
  role: string;
  experience_year: string;
  description: string;
  type: string;
}

interface ExperienceType extends PendidikanType {
  organizations: OrganizationType[];
  experiences: ExperienceDetailType[];
}

export type { DataType, UserType, ExperienceType };
