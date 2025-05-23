# -*- coding: utf-8 -*-

class TaskController < ApplicationController
  def index
    @working_list = WorkingList.new
  end
  def add
    @task = ActiveList.new.add(params[:subject])
    @working_list = WorkingList.new
    
    respond_to do |format|
      format.html { redirect_to action: :index, anchor: "task_#{@task.id}" }
      format.turbo_stream
    end
  end
  
  def start
    @task = Task.find(params[:id].to_i)
    @task.mark_as_started
    @task.save!
    
    respond_to do |format|
      format.html { redirect_to action: :index, anchor: "task_#{@task.id}" }
      format.turbo_stream
    end
  end
  
  def complete
    @task = Task.find(params[:id].to_i)
    @task.mark_as_completed
    @task.save!
    
    respond_to do |format|
      format.html { redirect_to action: :index, anchor: "task_#{@task.id}" }
      format.turbo_stream
    end
  end
  
  def cancel
    @task = Task.find(params[:id].to_i)
    @task.mark_as_canceled
    @task.save!
    
    respond_to do |format|
      format.html { redirect_to action: :index, anchor: "task_#{@task.id}" }
      format.turbo_stream
    end
  end
  def close_list
    uncompleted_task = CompletedList.new.find_uncompleted_task
    if uncompleted_task
      flash[:error] = "닫힌 작업 목록에 검토하지 않은 작업이 남아 있습니다."
    else
      @closed_mark = ActiveList.new.close
    end
    @working_list = WorkingList.new
    
    respond_to do |format|
      format.html { redirect_to action: :index }
      format.turbo_stream
    end
  end
end
