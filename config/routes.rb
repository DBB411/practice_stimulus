Rails.application.routes.draw do
  get "/hello", to: "application#hello"  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/lists", to: "application#lists"  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/lists/:list_id", to: "application#list"

  put "/lists/:list_id/move-items", to: "application#list_move_items", defaults: { format: 'json' }
end
