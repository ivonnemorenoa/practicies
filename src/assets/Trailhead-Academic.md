# Trailhead Salesforce

#### Crear una clase

The first step is to create an Apex class.


1. Click the **setup** gear Gear icon to access Setup in Lightning Experience. and select Developer Console.
2. From the **File** menu, select **New | Apex Class**.
3. For the class name, enter OlderAccountsUtility and then click **OK**.

```
public class OlderAccountsUtility {
}
```

#### Agregar un metodo a la clase

<p>A class usually contains one or more methods that do something useful. In this step, you’ll create the updateOlderAccounts method, which gets the first five Account records ordered by the date created. It then updates the description field to say that this is a “Heritage Account,” meaning accounts that are older than other accounts.</p>

```
    public static void updateOlderAccounts() {
      // Get the 5 oldest accounts
      Account[] oldAccounts = [SELECT Id, Description FROM Account ORDER BY CreatedDate ASC LIMIT 5];
      // loop through them and update the Description field
      for (Account acct : oldAccounts) {
          acct.Description = 'Heritage Account';
      }
      // save the change you made
      update oldAccounts;
    }
```

#### Invocar y probar el código

Un bloque anónimo es un código de Apex que no se almacena, pero se puede compilar y ejecutar bajo demanda directamente desde Developer Console. Esta es una excelente manera de probar sus clases de Apex o ejecutar código de muestra.

1. In the Developer Console, select **Debug | Open Execute Anonymous Window.**
2. In the Enter Apex Code window, enter the following:
```
OlderAccountsUtility.updateOlderAccounts();
```

3.At the bottom right, click **Execute**.

#### DreamHouse scenario

<p>Conocido por su nuevo enfoque de bienes raíces, DreamHouse utiliza Salesforce para conectar a sus empleados y mejorar la eficiencia de las ventas de viviendas.</p<>>

<p>**Los objetos** son tablas en la base de datos de Salesforce que almacenan un tipo particular de información. Hay objetos estándar como Cuentas y Contactos y objetos personalizados como el objeto Propiedad que ve en el gráfico.</p>

#### Trailhead Playground

<p>Los TP (Trailhead Playground) vienen con todas las herramientas estándar de creación y personalización de aplicaciones necesarias para probar sus habilidades de desarrollo de aplicaciones. Si alguna vez ha oído hablar de una organización Developer Edition (DE), un TP es un tipo especial de DE.</p>
