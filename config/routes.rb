Rails.application.routes.draw do
  root "task#index"
  
  post "task/add"
  post "task/start/:id", to: "task#start", as: :start_task
  post "task/complete/:id", to: "task#complete", as: :complete_task  
  post "task/cancel/:id", to: "task#cancel", as: :cancel_task
  post "task/close_list", to: "task#close_list"
  
  get "up" => "rails/health#show", as: :rails_health_check
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
