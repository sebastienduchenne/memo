'''
dans le module : Pool, mp, Process, Queue, Pipe, Lock, Value, Array, Manager, TimeoutError

-2 moyens d'échanges d'objets : queues et pipes
-synchronisation de process : avec Lock
-pool de workers
-partage d'état entre process : mémoire partagée, processus serveur

'''

# classe Process
from multiprocessing import Process

def f(name):
    print('hello', name)

if __name__ == '__main__':
    p = Process(target=f, args=('john',))
    p.start()
    p.join()



# synchronisation de process : avec Lock
from multiprocessing import Process, Lock

def f(l, i):
    l.acquire()
    try:
        print('hello world', i)
    finally:
        l.release()

if __name__ == '__main__':
    lock = Lock()

    for num in range(10):
        Process(target=f, args=(lock, num)).start()