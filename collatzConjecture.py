import matplotlib.pyplot as plt

def collatz_conjecture(n):
    steps = [n]
    
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        
        steps.append(n)
    
    return steps

def plot_collatz_conjecture(n):
    steps = collatz_conjecture(n)
    x = range(len(steps))

    plt.plot(x, steps, 'b.-')
    plt.xlabel('Step')
    plt.ylabel('Value')
    plt.title(f'Collatz Conjecture for n = {n}')
    plt.grid(True)
    plt.show()

# Example usage:
plot_collatz_conjecture(2^68)
plot_collatz_conjecture(10^10)
