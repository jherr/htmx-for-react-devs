import { Faker, en } from "@faker-js/faker";

const faker = new Faker({ locale: [en] });

export default Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  first: faker.person.firstName(),
  last: faker.person.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  job: faker.person.jobDescriptor(),
}));
