# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Post.destroy_all

# 20.times do
#    Post.create(
#     title: Faker::Lorem.sentence(word_count:3),
#     body: Faker::Lorem.paragraph(sentence_count:3),
#    ) 
# end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all

User.create([{
    "userid": "256071420-5",
    "first_name": "Shae",
    "last_name": "Featherstonhalgh",
    "email": "sfeatherstonhalgh0@netlog.com",
    "address": "Room 1344"
  }, {
    "userid": "490402492-3",
    "first_name": "Bria",
    "last_name": "Dreakin",
    "email": "bdreakin1@google.cn",
    "address": "Room 743"
  }, {
    "userid": "910006979-5",
    "first_name": "Rutherford",
    "last_name": "Woolard",
    "email": "rwoolard2@jalbum.net",
    "address": "PO Box 97485"
  }, {
    "userid": "711239965-3",
    "first_name": "Myriam",
    "last_name": "Widdows",
    "email": "mwiddows3@stumbleupon.com",
    "address": "PO Box 4179"
  }, {
    "userid": "183742763-1",
    "first_name": "Livy",
    "last_name": "Scrivner",
    "email": "lscrivner4@csmonitor.com",
    "address": "Apt 55"
  }, {
    "userid": "093087830-2",
    "first_name": "Carleen",
    "last_name": "Coxall",
    "email": "ccoxall5@cyberchimps.com",
    "address": "17th Floor"
  }, {
    "userid": "451904041-8",
    "first_name": "Robers",
    "last_name": "Tournie",
    "email": "rtournie6@mayoclinic.com",
    "address": "Room 750"
  }, {
    "userid": "223912280-3",
    "first_name": "Vivia",
    "last_name": "Gon",
    "email": "vgon7@weebly.com",
    "address": "Suite 64"
  }, {
    "userid": "355234350-4",
    "first_name": "Paula",
    "last_name": "McPaik",
    "email": "pmcpaik8@disqus.com",
    "address": "16th Floor"
  }, {
    "userid": "520222965-8",
    "first_name": "Vernon",
    "last_name": "Cropton",
    "email": "vcropton9@whitehouse.gov",
    "address": "Apt 1225"
}])

p "Created #{User.count} entries."