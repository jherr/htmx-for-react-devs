import { Faker, en } from "@faker-js/faker";

const faker = new Faker({ locale: [en] });

const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  first: faker.person.firstName(),
  last: faker.person.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  job: faker.person.jobDescriptor(),
}));

export async function GET({ params }) {
  const page = params.page || 1;

  return new Response(JSON.stringify(users.slice((page - 1) * 10, page * 10)));
}
