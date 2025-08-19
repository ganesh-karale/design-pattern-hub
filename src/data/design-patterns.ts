export const patterns = [
  {
    id: "singleton",
    name: "Singleton Pattern",
    description: "Ensures a class has only one instance and provides a global point of access to it.",
  },
  {
    id: "factory",
    name: "Factory Pattern",
    description: "Creates objects without exposing the instantiation logic to the client.",
  },
  {
    id: "observer",
    name: "Observer Pattern",
    description: "Defines a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.",
  },
  // Add more patterns as needed
] as const

export const languages = [
  {
    id: "python",
    name: "Python",
    extension: ".py",
  },
  {
    id: "typescript",
    name: "TypeScript",
    extension: ".ts",
  },
  {
    id: "java",
    name: "Java",
    extension: ".java",
  },
  {
    id: "go",
    name: "Go",
    extension: ".go",
  },
  // Add more languages as needed
] as const

export const implementations = {
  singleton: {
    python: `class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        # Initialize your singleton instance here
        pass`,
    typescript: `class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Initialize your singleton instance here
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}`,
    java: `public class Singleton {
    private static Singleton instance;
    
    private Singleton() {
        // Initialize your singleton instance here
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`,
    go: `package singleton

type singleton struct {
    // Add your singleton fields here
}

var instance *singleton

func GetInstance() *singleton {
    if instance == nil {
        instance = &singleton{}
    }
    return instance
}`,
  },
  factory: {
    python: `from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    @staticmethod
    def create_animal(animal_type: str) -> Animal:
        if animal_type.lower() == "dog":
            return Dog()
        elif animal_type.lower() == "cat":
            return Cat()
        raise ValueError("Unknown animal type")`,
    typescript: `interface Animal {
  speak(): string;
}

class Dog implements Animal {
  speak(): string {
    return "Woof!";
  }
}

class Cat implements Animal {
  speak(): string {
    return "Meow!";
  }
}

class AnimalFactory {
  static createAnimal(animalType: string): Animal {
    switch (animalType.toLowerCase()) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error("Unknown animal type");
    }
  }
}`,
    java: `interface Animal {
    String speak();
}

class Dog implements Animal {
    @Override
    public String speak() {
        return "Woof!";
    }
}

class Cat implements Animal {
    @Override
    public String speak() {
        return "Meow!";
    }
}

class AnimalFactory {
    public static Animal createAnimal(String animalType) {
        switch (animalType.toLowerCase()) {
            case "dog":
                return new Dog();
            case "cat":
                return new Cat();
            default:
                throw new IllegalArgumentException("Unknown animal type");
        }
    }
}`,
    go: `package factory

type Animal interface {
    Speak() string
}

type Dog struct{}

func (d *Dog) Speak() string {
    return "Woof!"
}

type Cat struct{}

func (c *Cat) Speak() string {
    return "Meow!"
}

func CreateAnimal(animalType string) Animal {
    switch animalType {
    case "dog":
        return &Dog{}
    case "cat":
        return &Cat{}
    default:
        panic("Unknown animal type")
    }
}`,
  },
  observer: {
    python: `from abc import ABC, abstractmethod
from typing import List

class Observer(ABC):
    @abstractmethod
    def update(self, temperature: float):
        pass

class WeatherStation:
    def __init__(self):
        self._observers: List[Observer] = []
        self._temperature: float = 0

    def add_observer(self, observer: Observer):
        self._observers.append(observer)

    def remove_observer(self, observer: Observer):
        self._observers.remove(observer)

    def set_temperature(self, temperature: float):
        self._temperature = temperature
        self._notify_observers()

    def _notify_observers(self):
        for observer in self._observers:
            observer.update(self._temperature)

class TemperatureDisplay(Observer):
    def update(self, temperature: float):
        print(f"Temperature Display: {temperature}°C")`,
    typescript: `interface Observer {
  update(temperature: number): void;
}

class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  update(temperature: number): void {
    console.log(\`Temperature Display: \${temperature}°C\`);
  }
}`,
    java: `import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(float temperature);
}

class WeatherStation {
    private List<Observer> observers = new ArrayList<>();
    private float temperature;

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    public void setTemperature(float temperature) {
        this.temperature = temperature;
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature);
        }
    }
}

class TemperatureDisplay implements Observer {
    @Override
    public void update(float temperature) {
        System.out.printf("Temperature Display: %.1f°C%n", temperature);
    }
}`,
    go: `package observer

type Observer interface {
    Update(temperature float64)
}

type WeatherStation struct {
    observers   []Observer
    temperature float64
}

func NewWeatherStation() *WeatherStation {
    return &WeatherStation{
        observers: make([]Observer, 0),
    }
}

func (w *WeatherStation) AddObserver(observer Observer) {
    w.observers = append(w.observers, observer)
}

func (w *WeatherStation) RemoveObserver(observer Observer) {
    for i, obs := range w.observers {
        if obs == observer {
            w.observers = append(w.observers[:i], w.observers[i+1:]...)
            break
        }
    }
}

func (w *WeatherStation) SetTemperature(temperature float64) {
    w.temperature = temperature
    w.notifyObservers()
}

func (w *WeatherStation) notifyObservers() {
    for _, observer := range w.observers {
        observer.Update(w.temperature)
    }
}

type TemperatureDisplay struct{}

func (d *TemperatureDisplay) Update(temperature float64) {
    fmt.Printf("Temperature Display: %.1f°C\n", temperature)
}`,
  },
} as const

export type PatternId = (typeof patterns)[number]["id"]
export type LanguageId = (typeof languages)[number]["id"]
