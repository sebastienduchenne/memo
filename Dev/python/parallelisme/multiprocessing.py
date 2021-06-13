'''
dans le module : Pool, mp, Process, Queue, Pipe, Lock, Value, Array, Manager, TimeoutError

-2 moyens d'échanges d'objets : queues et pipes
-synchronisation de process : avec Lock
-pool de workers
-partage d'état entre process : mémoire partagée, processus serveur

'''

# créer un processus
from multiprocessing import Process

def f(name):
    print('hello', name)

if __name__ == '__main__':
    p = Process(target=f, args=('john',))
    p.start()
    p.join()


# partage de données par mémoire partagée
from multiprocessing import Process, Value, Array

def f(n):
    n.value = 3.14

if __name__ == '__main__':
    num = Value('d', 0.0)

    p = Process(target=f, args=(num))
    p.start()
    p.join()

    print(num.value)


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


# pool de workers : avec Pool
'''
-apply() : Appelle func
-apply_async() : comme apply() mais renvoit un objet AsyncResult
-close() : Empêche de nouvelles tâches d'être envoyées à la pool
-terminate() : Stoppe immédiatement les processus workers sans finaliser les travaux courants
-join() : Attend que les processus workers se terminent

classe Pool.AsyncResult : renvoyée par apply_async() et map_async()
    get() : Renvoie le résultat quand il arrive
    wait() : Attend que le résultat soit disponible
    ready() : Renvoie True ou False suivant si la tâche est accomplie
    successful() : Renvoie True ou False suivant si la tâche est accomplie
'''
from multiprocessing import Pool

def f(x):
    return x*x

if __name__ == '__main__':
    pool = Pool(processes=4)            # démarrer un pool de 4 process
    res = pool.apply_async(f, (20,))    # run 1 process
    res_p = res.get(timeout=1)          # renvoit le résultat