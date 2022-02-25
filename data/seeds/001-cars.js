exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('cars')
      .truncate()
      .then(function() {
        return knex('cars').insert([
          { model: 'Lotus' },
          { model: 'BMW' },
          { model: 'Mitsubishi' },
          { model: 'Jaguar' },
        ]);
      });
  };
  