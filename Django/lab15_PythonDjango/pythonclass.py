"""
Nang Shen Hom
Aug 08, python classes
"""
class MyClass:
    x = 5
    
# calling class Myclass
myclass1=MyClass() 
print("The complete class ", myclass1)
print("Property of MyClass ", myclass1.x)

print("--------------- Example 2: Initialized a class --------")
class Person:
    #initialize class properties value
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
        #self a class property
        self.luckynumber = 88
        
    #return string
    def __str__(self):
        return f"User {self.name} is {self.age} years old"
    
    #method
    def mymethod(self):
        print(f"{self.name} lucky number is {self.luckynumber}")
    
# calling class, create an object of class Person
# create an object of class person
user1 = Person("Ann", 23)
user2 = Person("Quincy", 5)
print(f"User {user1.name} is {user1.age} years old")
print(f"User {user2.name} is {user2.age} years old")

print (f"Result --> {user1}")
# print the method
user1.mymethod()
print(f"Class Property --> {user1.luckynumber}")
# user2.name.mymethod()
# print(f"Class Property --> {user2.luckynumber}")

#modify class property's value
user1.age = 28
print(f"Result --> {user1}")

# empty class
class Schedule:
    pass

print("--------------- Example 3: class with adjustable methods --------")
class Number:
    def __init__(self, num):
        self.num = num
        
        # Accessible property
        self.num_symbol = '$'
        
    # Define a method to double the number
    def doublenumber(self):
        self.num = self.num * 2
        
    # Return a string representation of the class
    def __str__(self):
        return f"The final number is {self.num_symbol}{self.num}"
            
# Create an object of class Number
n1 = Number(12)
# Print the object of class number
print(f"Object of class Number --> {n1}")

# Call the method double number
n1.doublenumber()
# Print the object of class Number
print(f"Object of class Number --> {n1}")

n1.doublenumber()
print(f"Object of class Number --> {n1}")

print("--------------- Example 4: class with private property --------")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.totaldimension = 0
        self.shippingcostfee = 0.2
        self.totalshippingcost =0
        
    #accessible _under score is private property
    _chair_color = 'brown'
    
    #method to calculate the total dimension
    def total_dimension(self):
        return self.height * self.width * self.width
    
    #method to calculate the total shipping cost
    # def total_shipping(self):
    #      self.totalshippingcost= self.shippingcostfee * self.totaldimension()
    
    #print method
    #return string of class
    def __str__(self):
        return f"The total shipping cost for the {self._chair_color} chair is ${self.total_dimension()}"

#create an object of the class
chair1 = Chair(30,40,50)
dimenison = chair1.total_dimension()
#print the object
print(f"Result for {chair1._chair_color} with dimesion{chair1} ")