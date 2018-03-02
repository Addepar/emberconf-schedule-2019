require "json"
require "net/http"
require "titleize"
require "yaml"

# Time.zone = "America/Los_Angeles"

desc "Import session data"
task :default do

  schedule_uri = "https://raw.githubusercontent.com/tildeio/emberconf-2018/master/data/schedule.yml?token=AAPUNsWY3Mj4DHTmmUDk7CW-u5M9rC5Vks5aotFUwA%3D%3D"
  data_lib = "app/lib/data.js";

  schedule_data = load_remote_yaml(schedule_uri)

  if schedule_data[404]
    puts red_output("The URL to the Yaml Schedule needs to be updated")
  else

    parsed_data = parsed_days(schedule_data)

    open(data_lib, "w+") do |f|
      f << "export default "
      f << JSON.pretty_generate(parsed_data)
      f << ";"
    end

    puts green_output("Schedule data has been updated!")
  end
end

def red_output(string)
  "\033[31m#{string}\033[0m"
end

def green_output(string)
  "\033[32m#{string}\033[0m"
end

def load_remote_yaml(uri)
  file_contents = Net::HTTP.get URI(uri)
  YAML.load file_contents
end

def parsed_days(schedule_data)
  return %w(day-1 day-2).map do |day_key|
    day_data = schedule_data[day_key]
    parsed_day(day_data)
  end
end

def parsed_day(day_data)
  day_date = Date.parse(day_data["date"]).strftime("%Y-%m-%d")

  {
    date: day_date,
    sessions: parsed_events(day_data["categories"][0]["events"], day_date)
  }
end

def parsed_events(events_data, date)
  filtered_events_data = events_data.select { |event| event["name"] != "Registration" }
  filtered_events_data.map do |event_data|
    parsed_event(event_data, date)
  end
end

def parsed_event(event_data, date)
  event = {
    name: event_data["name"].titleize,
    start: parsed_datetime(date, event_data["start"]),
    end: parsed_datetime(date, event_data["end"])
  }

  event["speakers"] = parsed_speakers(event_data["speakers"]) if event_data["speakers"]
  event["description"] = event_data["description"].delete('>').strip if event_data["description"]
  event["sessions"] = parsed_event_sessions(event_data["sessions"]) if event_data["sessions"]

  event
end

def parsed_datetime(date, time)
  d = DateTime.parse(date)
  t = DateTime.parse(time)

  DateTime.new(d.year, d.month, d.day, t.hour, t.min, 0, "-07:00").to_s
end

def parsed_speakers(speakers_data)
  speakers_data.map { |s| s["speaker"] }
end

def parsed_event_sessions(sessions_data)
  sessions_data.map do |session|
    {
      time: session["time"],
      title: (session["title"] == session["title"].upcase) ? session["title"] : session["title"].titleize,
      speaker: session["speaker"]
    }
  end
end
