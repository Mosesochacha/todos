require 'faker'
puts "Seeding data ...."
User.create!(
  username: Faker::Internet.unique.username(specifier: 5..8, separators: %w(_ -)),
  email: Faker::Internet.email,
  password_digest: Faker::Internet.password
)

10.times do
  title = Faker::Lorem.words(number: 3).join(' ')[0..19]
  Todo.create!(
    title: title,
    description: Faker::Lorem.paragraph(sentence_count: 3),
    status: rand(3),
    priority: rand(3),
    user_id: User.last.id
  )
end

puts "Completed seeding"
