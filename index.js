const handlebars = require("handlebars");
require("handlebars-helpers")();

const rawTemplate = `
{{#each (sortBy customer.addresses sort)}}
    <div class="panel panel--address">
        <div class="panel-body">
            <li>{{company}}</li>
            <li>{{address1}}</li>
            <li>{{address2}}</li>
            <li>{{city}}{{#if state}}, {{state}}{{/if}} {{zip}}</li>
            <li>{{country}}</li>
        </div>
    </div>
{{/each}}
`;

const data = {
  customer: {
    addresses: [
      {
        address1: "555 Fifth Ave.",
        address2: "#55",
        city: "Frankfort",
        company: "Bob's Better Barley",
        country: "USA",
        first_name: "Bob",
        last_name: "Bobson",
        state: "Kentucky",
        zip: "55555",
      },
      {
        address1: "222 Barly Blvd.",
        address2: "Building 2",
        city: "Boston",
        company: "Bob's Barley",
        country: "USA",
        first_name: "Bob",
        last_name: "Bobson",
        state: "Massachusettes",
        zip: "22222",
      },
      {
        address1: "444 Fourth Line",
        address2: "Unit 4",
        city: "Denver",
        company: "Dan's Donuts",
        country: "USA",
        first_name: "Dan",
        last_name: "Aaronson",
        state: "Colorado",
        zip: "44444",
      },
      {
        address1: "333 Carlton Cr.",
        address2: "#3",
        city: "Chicago",
        company: "Cal's Carrots",
        country: "USA",
        first_name: "Cal",
        last_name: "Carson",
        state: "Illinois",
        zip: "33333",
      },

      {
        address1: "111 Apple Ln.",
        address2: "Apt. 111",
        city: "Albany",
        company: "Adam's Apples",
        country: "USA",
        first_name: "Adam",
        last_name: "Aaronson",
        state: "New York",
        zip: "11111",
      },
    ],
  },
  sort(a, b) {
    if (a.last_name > b.last_name) {
      return 1;
    } else if (a.last_name < b.last_name) {
      return -1;
    } else if (a.first_name > b.first_name) {
      return 1;
    } else if (a.first_name < b.first_name) {
      return -1;
    } else if (a.address1 > b.address1) {
      return 1;
    } else if (a.address1 < b.address1) {
      return -1;
    }

    return 0;
  },
};

const template = handlebars.compile(rawTemplate);
const output = template(data);

console.log(output);
