class User < ApplicationRecord
    has_secure_password

    has_many :ratings, through: :drinks
    has_many :drinks, through: :restaurants

    validates :username, presence: true, uniqueness: true
end
