class Item < ApplicationRecord
  belongs_to :list
  acts_as_list scope: :list, top_of_list: 0, add_new_at: :bottom
end
