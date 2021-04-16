export class Friend {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  language: string | null;

  constructor(firstName: string | null, lastName: string | null, email: string | null, phoneNumber: string | null, language: string | null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.language = language;
  }
}
